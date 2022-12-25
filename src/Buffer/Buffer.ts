import { observable, action } from "mobx"
import { DataFacade, InputData } from "../typings"
import { ButtonTypes, OperationSymbols, DigitSymbols } from "../enums"
import { getLastInput, prevIsOperator, prevIsSeparator, prevIsNumber, removeLastInput, getPrevNumber, shouldAddZero, getPrevOperator, changeOperator, shouldIgnoreSeparator } from "../helpers"
import { Provider } from "../Provider"

export class Buffer implements DataFacade {
    public provider: Provider
    @observable result: string
    @observable expression: string
    @observable operand_1: string
    @observable operand_2: string
    @observable action: string

    constructor(provider: Provider) {
        this.provider = provider
        this.expression = "0"
        this.result = "0"

        this.operand_1 = ""
        this.operand_2 = ""
        this.action = ""
    }

    @action getExpressionParts(): string {
        const operations = [
            OperationSymbols.multiply,
            OperationSymbols.divide,
            OperationSymbols.plus,
            OperationSymbols.minus
        ]
        let index = -1

        this.action = operations.filter(
            o => {
                const i = this.expression.indexOf(o, 1)
                return i > 0 && (index = i)
            }
        )[0]

        this.operand_1 = this.expression.substring(0, index)
        this.operand_2 = this.expression.substring(index + 1, this.expression.length)

        return this.action
    }

    /**
     * Check if 2 numbers already in expression => should evaluate
     * @param {string} expression
     */
    private shouldEval(expression: string): boolean {
        const numbers = expression.match(/([\-]?[0-9]+\.[0-9]+)|([\-]?[0-9]+)/g) || []
        return numbers.length > 1 ? true : false
    }

    reset(): string {
        return this.replaceExpression("0")
    }

    /**
     * Delete previus value from input
     */
    @action delete(): string {
        this.expression = this.expression.length > 1
            ? removeLastInput(this.expression)
            : "0"
        return this.expression
    }

    /**
     * Update buffer result, by evaluating expression
     */
    @action updateResult(): string {
        if (!this.shouldEval(this.expression)) {
            return this.expression
        }

        this.getExpressionParts()

        const result = this.provider.updateResult(this.operand_1, this.operand_2, this.action)

        this.result = this.updateNumberFormat(result)
        this.replaceExpression(this.result)

        return this.result
    }

    updateNumberFormat(result: number): string {
        // Needed for correct calculations
        return Number(result.toFixed(2)).toString()
    }

    /**
     * Add value to expression
     * @param {string} value
     */
    @action addToExpression(value?: string): string {
        // TODO: Add check for expression length
        this.expression = value
            ? this.expression.concat(value)
            : "0"
        return this.expression
    }

    /**
     * Remove last value from expression
     * @param {string} expression
     */
    @action removeFromExpression(expression: string): string {
        this.expression = removeLastInput(expression)
        return this.expression
    }

    @action replaceExpression(newExpression: string) {
        return this.expression = newExpression
    }

    /**
     * Check if should remove zero from expression
     * @param {string} expression
     */
    private shouldRemoveZero(expression: string): boolean {
        // Remove zero if expression is "0"
        if (expression === "0") {
            return true
        }

        // Remove zero if after Operator
        return expression.length && expression[expression.length - 1] === DigitSymbols.zero
            ? prevIsOperator(removeLastInput(expression))
                ? true
                : false
            : false
    }

    /**
     * Update sign in front of number
     * @param {string} prevNumber
     */
    private updateSign(prevNumber: string): string {
        let ex = this.expression
        ex = ex.substring(0, ex.length - prevNumber.length)

        const numberSign = getPrevOperator(getLastInput(ex))
        ex = changeOperator(ex, numberSign)
        ex = ex.concat(prevNumber)

        this.replaceExpression(ex)

        return this.expression
    }

    updateExpression(data: InputData): string {
        switch (data.type) {
            case ButtonTypes.Sign:
                return this.addSign()
            case ButtonTypes.Separator:
                return this.addSeparator(data)
            case ButtonTypes.Operator:
                return this.addOperator(data)
            case ButtonTypes.Digit:
                return this.addDigit(data)
            default:
                return this.expression
        }
    }

    private addSign(): string {
        if (!this.expression.length) {
            return this.expression
        }

        // Add OR Remove minus before prevNumber
        if (prevIsNumber(this.expression)) {
            this.updateSign(getPrevNumber(this.expression))
        }

        return this.expression
    }

    private addSeparator(data: InputData): string {
        // Ignore if prevIsDecimal
        if (shouldIgnoreSeparator(this.expression, data)) {
            return this.expression
        }

        // Add initial zero or zero before operator
        shouldAddZero(this.expression, data) && this.addToExpression("0")

        // Ignore if duplicated input
        if (getLastInput(this.expression) !== data.value) {
            this.addToExpression(data.value)
        }

        return this.expression
    }

    private addOperator(data: InputData): string {
        // Add zero after Separator
        if (prevIsSeparator(this.expression)) {
            this.addToExpression("0")
        }

        // Ignore if duplicated input
        if (getLastInput(this.expression) === data.value) {
            return this.expression
        }

        // Replace last Operator input
        if (prevIsOperator(this.expression)) {
            this.replaceExpression(removeLastInput(this.expression))
        }

        // Eval and replace expression with result
        this.replaceExpression(this.updateResult())

        this.addToExpression(data.value)

        return this.expression
    }

    private addDigit(data: InputData): string {
        // Remove initial zero in number
        this.shouldRemoveZero(this.expression) && this.removeFromExpression(this.expression)
        this.addToExpression(data.value)

        return this.expression
    }

}
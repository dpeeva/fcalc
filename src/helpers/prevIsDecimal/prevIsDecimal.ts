import { OperationSymbols } from "../../typings"
import { InputData } from "../../typings"
import { prevIsOperator, prevIsDigit, prevIsSeparator, shouldAddZero, getLastInput, removeLastInput } from "../../helpers"

export const prevIsDecimal = (expression: string, data: InputData): boolean => {
    let ex = expression
    let isDecimal = false

    if (prevIsOperator(ex)) {
        shouldAddZero(expression, data)
        return isDecimal
    }

    while ((ex.length && prevIsDigit(ex)) || prevIsSeparator(ex)) {
        const lastInput = getLastInput(ex)

        if (lastInput === OperationSymbols.separator) {
            isDecimal = true
            break
        }

        ex = removeLastInput(ex)
    }

    return isDecimal
}
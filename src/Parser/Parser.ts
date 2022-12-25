import { InputData } from "../typings"
import { ButtonTypes, buttonValue, OperationSymbols, operationKey } from "../enums"
import { Buffer } from "../Buffer"

export class Parser {
    private buffer: Buffer

    constructor(facade: Buffer) {
        this.buffer = facade
    }

    clear(): string {
        return this.buffer.reset()
    }

    delete(): string {
        return this.buffer.delete()
    }

    eval(): string {
        this.buffer.updateResult()
        return this.buffer.result
    }

    isValidInput(key: buttonValue): boolean {
        return !!OperationSymbols[key as operationKey] || (key >= "0" && key <= "9")
    }

    getDisplayData(key: buttonValue): string {
        if (!this.isValidInput(key)) {
            return this.buffer.result
        }

        const value = this.parseKey(key)

        if (value) {
            return this.buffer.updateExpression(value)
        }

        return this.buffer.result
    }

    parseKey(key: buttonValue): InputData {
        if (key === "plus-minus") {
            return { value: OperationSymbols[key as operationKey], type: ButtonTypes.Sign }
        }

        if (key === "separator") {
            return { value: OperationSymbols[key as operationKey], type: ButtonTypes.Separator }
        }

        return this.prepareInputData(key)
    }

    prepareInputData(key: string): InputData {
        return isNaN(parseFloat(key))
            ? { value: OperationSymbols[key as operationKey], type: ButtonTypes.Operator }
            : { value: key, type: ButtonTypes.Digit }
    }
}
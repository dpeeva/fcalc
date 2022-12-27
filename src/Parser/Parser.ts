import { makeObservable, observable } from "mobx"
import { InputData } from "../typings"
import { ButtonTypes, buttonValue, OperationSymbols, operationKey } from "../typings"
import { DataFacade } from "../DataFacade"

export class Parser {
    @observable private facade: DataFacade

    constructor(facade: DataFacade) {
        makeObservable(this)
        this.facade = facade
    }

    clear(): string {
        return this.facade.reset()
    }

    delete(): string {
        return this.facade.delete()
    }

    eval(): string {
        this.facade.updateResult()
        return this.facade.result
    }

    isValidInput(key: buttonValue): boolean {
        return !!OperationSymbols[key as operationKey] || (key >= "0" && key <= "9")
    }

    getDisplayData(key: buttonValue): string {
        if (!this.isValidInput(key)) {
            return this.facade.result
        }

        const value = this.parseKey(key)

        if (value) {
            return this.facade.updateExpression(value)
        }

        return this.facade.result
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

    prepareInputData(key: buttonValue): InputData {
        return isNaN(parseFloat(key))
            ? { value: OperationSymbols[key as operationKey], type: ButtonTypes.Operator }
            : { value: key, type: ButtonTypes.Digit }
    }
}
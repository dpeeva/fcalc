import { OperationSymbols } from "../../enums"
import { getLastInput } from "../getLastInput"

export const prevIsOperator = (expression: string): boolean => {
    const lastInput = getLastInput(expression)

    switch (lastInput) {
        case OperationSymbols.plus:
            return true
        case OperationSymbols.minus:
            return true
        case OperationSymbols.multiply:
            return true
        case OperationSymbols.divide:
            return true
        default:
            return false
    }
}
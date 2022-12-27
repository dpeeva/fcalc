import { OperationSymbols } from "../../typings"
import { getLastInput } from "../getLastInput"

export const prevIsSeparator = (expression: string): boolean => {
    return getLastInput(expression) === OperationSymbols.separator
        ? true
        : false
}
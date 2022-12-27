import { InputData, OperationSymbols } from "../../typings"
import { prevIsDecimal } from "../prevIsDecimal"

/**
 * Check if last input separator should be ignored
 * @param {string} expression
 * @param {InputData} data
 */
export const shouldIgnoreSeparator = (expression: string, data: InputData): boolean =>
    data.value === OperationSymbols.separator && prevIsDecimal(expression, data)
        ? true
        : false
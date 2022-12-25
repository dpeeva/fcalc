import { ButtonTypes } from "../../enums"
import { InputData } from "../../typings"
import { prevIsOperator } from "../prevIsOperator"

/**
 * Check if zero should be added before last input
 * @param {InputData} data
 * @param {string} expression
 */
export const shouldAddZero = (expression: string, data: InputData): boolean => {
    // If expression is empty and data type is Operator
    if (!expression.length && data.type === ButtonTypes.Operator ) {
        return true
    }

    // If non-digit before Separator
    if (data.type === ButtonTypes.Separator && prevIsOperator(expression)) {
        return true
    }

    return false
}
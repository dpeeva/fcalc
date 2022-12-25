import { operationValue } from "../../enums"
import { getLastInput } from "../getLastInput"
import { removeLastInput } from "../removeLastInput"

/**
 * Change sign in front of number
 * @param {string} expression
 * @param {OperationSymbols} sign
 */
export const changeOperator = (expression: string, sign: operationValue): string => {
    const lastInput = getLastInput(expression)
    const ex = removeLastInput(expression)
    const prevInput = getLastInput(ex)

    if (lastInput === "+") {
        return updateSignAfterOperator(ex, prevInput, "-")
    }

    if (lastInput === "-") {
        return updateSignAfterOperator(ex, prevInput, "+")
    }

    return expression.concat(sign)
}

/**
 * Update sign after operator
 * @param {string} expression
 * @param {string} prevInput
 * @param {OperationSymbols} sign
 */
const updateSignAfterOperator = (expression: string, prevInput: string, sign: operationValue): string => {
    if (sign === "+" && (prevInput === "*" || prevInput === "/")) {
        return expression
    }

    const newExpression = expression.concat(sign)

    return newExpression.length > 1
        ? newExpression
        : ""
}
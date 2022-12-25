import { getLastInput } from "../getLastInput"

export const prevIsDigit = (expression: string): boolean => {
    const lastInput = getLastInput(expression)

    return lastInput >= "0" && lastInput <= "9"
}
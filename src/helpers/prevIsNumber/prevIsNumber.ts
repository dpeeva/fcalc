import { prevIsDigit } from "../prevIsDigit"
import { prevIsSeparator } from "../prevIsSeparator"

export const prevIsNumber = (expression: string): boolean =>
    prevIsDigit(expression) || prevIsSeparator(expression)
        ? true
        : false
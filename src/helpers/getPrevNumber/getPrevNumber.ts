import { getLastInput } from "../getLastInput"
import { prevIsDigit } from "../prevIsDigit"
import { prevIsSeparator } from "../prevIsSeparator"
import { removeLastInput } from "../removeLastInput"

export const getPrevNumber = (expression: string): string => {
    let ex = expression
    let prevNumber = ""

    while (ex.length) {
        const lastInput = getLastInput(ex)

        if (prevIsDigit(lastInput) || prevIsSeparator(lastInput)) {
            prevNumber = lastInput + prevNumber
            ex = removeLastInput(ex)
        }
        else { break }
    }

    return prevNumber
}
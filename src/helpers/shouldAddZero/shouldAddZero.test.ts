import { ButtonTypes } from "../../typings"
import { shouldAddZero } from "./shouldAddZero"

describe("shouldAddZero", () => {
    it("returns correctly for separator", () => {
        const result = shouldAddZero("+", {
            value: ".",
            type: ButtonTypes.Separator
        })

        expect(result).toBe(true)
    })

    it("returns correctly for separator", () => {
        const result = shouldAddZero("", {
            value: "+",
            type: ButtonTypes.Operator
        })

        expect(result).toBe(true)
    })

    it("returns correctly for digit", () => {
        const result = shouldAddZero("", {
            value: "5",
            type: ButtonTypes.Digit
        })

        expect(result).toBe(false)
    })
})
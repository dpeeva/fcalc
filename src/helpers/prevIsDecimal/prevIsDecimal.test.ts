import { ButtonTypes } from "../../enums"
import { prevIsDecimal } from "./prevIsDecimal"

describe("prevIsDecimal", () => {
    const separator = {
        value: ".",
        type: ButtonTypes.Separator
    }

    it("returns correctly for preceding integer", () => {
        const result = prevIsDecimal("52", separator)
        expect(result).toBe(false)
    })

    it("returns correctly for preceding separator", () => {
        const result = prevIsDecimal("52.", separator)
        expect(result).toBe(true)
    })

    it("returns correctly for preceding decimal", () => {
        const result = prevIsDecimal("52.3", separator)
        expect(result).toBe(true)
    })

    it("returns correctly for preceding operator", () => {
        const result = prevIsDecimal("52.3+", separator)
        expect(result).toBe(false)
    })
})
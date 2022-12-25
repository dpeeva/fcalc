import { prevIsDigit } from "./prevIsDigit"

describe("prevIsDigit", () => {
    it("returns correctly for non-digit", () => {
        const result = prevIsDigit("p2")
        expect(result).toBe(true)
    })

    it("returns correctly for digit", () => {
        const result = prevIsDigit("p")
        expect(result).toBe(false)
    })
})
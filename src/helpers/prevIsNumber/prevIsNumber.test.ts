import { prevIsNumber } from "./prevIsNumber"

describe("prevIsNumber", () => {
    it("returns correctly for not number", () => {
        const result = prevIsNumber("45+")
        expect(result).toBe(false)
    })

    it("returns correctly for number", () => {
        const result = prevIsNumber("45")
        expect(result).toBe(true)
    })

    it("returns correctly for number", () => {
        const result = prevIsNumber("45.")
        expect(result).toBe(true)
    })
})
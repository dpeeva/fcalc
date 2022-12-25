import { prevIsSeparator } from "./prevIsSeparator"

describe("prevIsSeparator", () => {
    it("returns correctly for non-separator", () => {
        const result = prevIsSeparator("2")
        expect(result).toBe(false)
    })

    it("returns correctly for non-separator", () => {
        const result = prevIsSeparator("2.")
        expect(result).toBe(true)
    })
})
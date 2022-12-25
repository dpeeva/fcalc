import { removeLastInput } from "./removeLastInput"

describe("removeLastInput", () => {
    it("returns correctly for non-empty string", () => {
        const result = removeLastInput("45+")
        expect(result).toBe("45")
    })

    it("returns correctly for empty string", () => {
        const result = removeLastInput("")
        expect(result).toBe("")
    })
})
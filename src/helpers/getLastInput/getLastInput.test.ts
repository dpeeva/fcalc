import { getLastInput } from "./getLastInput"

describe("getLastInput", () => {
    it("returns correctly for non-empty string", () => {
        const result = getLastInput("2")
        expect(result).toBe("2")
    })

    it("returns correctly for empty string", () => {
        const result = getLastInput("")
        expect(result).toBe("")
    })
})
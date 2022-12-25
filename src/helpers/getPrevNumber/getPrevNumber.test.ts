import { getPrevNumber } from "../getPrevNumber"

describe("getPrevNumber", () => {
    it("returns correctly for number", () => {
        const result = getPrevNumber("25+39")

        expect(result).toBe("39")
    })

    it("returns correctly for empty string", () => {
        const result = getPrevNumber("")

        expect(result).toBe("")
    })
})
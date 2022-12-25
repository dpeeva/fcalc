import { changeOperator } from "./changeOperator"

describe("changeOperator", () => {
    it("adds negative sign before initial number in expression", () => {
        const result = changeOperator("", "-")
        expect(result).toBe("-")
    })

    it("adds no sign before initial number in expression", () => {
        const result = changeOperator("-", "-")
        expect(result).toBe("")
    })

    it("changes sign after number in expression", () => {
        const result = changeOperator("52-", "-")
        expect(result).toBe("52+")
    })

    it("changes sign after number in expression", () => {
        const result = changeOperator("52+", "-")
        expect(result).toBe("52-")
    })

    it("adds negative sign after operator in expression", () => {
        const result = changeOperator("52/", "-")
        expect(result).toBe("52/-")
    })

    it("adds no positive sign after operator in expression", () => {
        const result = changeOperator("52/-", "-")
        expect(result).toBe("52/")
    })
})
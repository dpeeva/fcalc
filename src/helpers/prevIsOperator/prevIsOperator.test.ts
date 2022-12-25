import { prevIsOperator } from "./prevIsOperator"

describe("prevIsOperator", () => {
    it("returns correctly for non-operator", () => {
        const result = prevIsOperator("2")
        expect(result).toBe(false)
    })

    it("returns correctly for operator +", () => {
        const result = prevIsOperator("2+")
        expect(result).toBe(true)
    })

    it("returns correctly for operator -", () => {
        const result = prevIsOperator("2-")
        expect(result).toBe(true)
    })

    it("returns correctly for operator *", () => {
        const result = prevIsOperator("2*")
        expect(result).toBe(true)
    })

    it("returns correctly for operator /", () => {
        const result = prevIsOperator("2/")
        expect(result).toBe(true)
    })
})
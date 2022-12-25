import { OperationSymbols } from "../../enums"
import { getPrevOperator } from "./getPrevOperator"

describe("getPrevOperator", () => {
    it("returns correctly for minus", () => {
        const result = getPrevOperator(OperationSymbols.minus)
        expect(result).toBe("+")
    })

    it("returns correctly for plus", () => {
        const result = getPrevOperator(OperationSymbols.plus)
        expect(result).toBe("-")
    })
})
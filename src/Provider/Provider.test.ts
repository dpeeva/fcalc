import { Provider } from "./Provider"

describe("Provider", () => {
    const provider = new Provider()

    it("is a function", () => {
        expect(provider).toBeDefined()
    })

    // Update result
    it("updateResult returns result on NO operator", () => {
        const operator = ""
        const result = provider.updateResult("5", "2", operator)
        expect(result).toBe(0)
    })

    it("updateResult returns result on NO params", () => {
        const result = provider.updateResult()
        expect(result).toBe(0)
    })

    it("updateResult returns add on operator +", () => {
        const operator = "+"
        const result = provider.updateResult("5", "2", operator)
        expect(result).toBe(7)
    })

    it("updateResult returns subtract on operator -", () => {
        const operator = "-"
        const result = provider.updateResult("5", "2", operator)
        expect(result).toBe(3)
    })

    it("updateResult returns divide on operator /", () => {
        const operator = "/"
        const result = provider.updateResult("5", "2", operator)
        expect(result).toBe(2.5)
    })

    it("updateResult returns multiply on operator *", () => {
        const operator = "*"
        const result = provider.updateResult("5", "2", operator)
        expect(result).toBe(10)
    })

    // Get Operand
    it("getOperand returns 0 on NO params", () => {
        const result = provider.getOperand()
        expect(result).toBe(0)
    })

    it("getOperand returns correctly with param", () => {
        const number = "2.5"
        const result = provider.getOperand(number)
        expect(result).toBe(2.5)
    })

    // Addition
    it("add returns correctly with zero params", () => {
        const result = provider.add()
        expect(result).toBe(0)
    })

    it("add returns correctly with 2 params", () => {
        const result = provider.add(5, 2)
        expect(result).toBe(7)
    })

    it("add returns correctly with 1 param", () => {
        const result = provider.add(5)
        expect(result).toBe(0)
    })

    // Subtraction
    it("subtract returns correctly with zero params", () => {
        const result = provider.subtract()
        expect(result).toBe(0)
    })

    it("subtract returns correctly with 2 params", () => {
        const result = provider.subtract(5, 2)
        expect(result).toBe(3)
    })

    it("subtract returns correctly with 1 param", () => {
        const result = provider.subtract(5)
        expect(result).toBe(0)
    })

    // Multiplication
    it("multiply returns correctly with zero params", () => {
        const result = provider.multiply()
        expect(result).toBe(0)
    })

    it("multiply returns correctly with 2 params", () => {
        const result = provider.multiply(5, 2)
        expect(result).toBe(10)
    })

    it("multiply returns correctly with 1 param", () => {
        const result = provider.multiply(5)
        expect(result).toBe(0)
    })

    // Division
    it("divide returns correctly with zero params", () => {
        const result = provider.divide()
        expect(result).toBe(0)
    })

    it("divide returns correctly with 2 params", () => {
        const result = provider.divide(5, 2)
        expect(result).toBe(2.5)
    })

    it("divide returns correctly with 1 param", () => {
        const result = provider.divide(5)
        expect(result).toBe(0)
    })
})
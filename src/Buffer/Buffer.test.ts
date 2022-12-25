import { ButtonTypes, OperationSymbols } from "../enums"
import { Provider } from "../Provider"
import { Buffer } from "./Buffer"

describe("Buffer", () => {
    it("is defined", () => {
        const comp = new Buffer(new Provider())

        expect(comp).toBeDefined()
    })

    it("updateResult gets result from provider on complete expression", () => {
        const buffer = new Buffer(new Provider())
        buffer.expression = buffer.replaceExpression("5+5")
        expect(buffer.expression).toBe("5+5")

        buffer.updateExpression({
            value: "+",
            type: ButtonTypes.Operator
        })

        expect(buffer.result).toBe("10")
        expect(buffer.operand_1).toBe("5")
        expect(buffer.operand_2).toBe("5")
        expect(buffer.action).toBe("+")
    })

    it("shouldRemoveZero removes initial zero in number", () => {
        const buffer = new Buffer(new Provider())
        buffer.expression = buffer.replaceExpression("0")
        expect(buffer.expression).toBe("0")

        buffer.updateExpression({
            value: "5",
            type: ButtonTypes.Digit
        })

        expect(buffer.expression).toBe("5")
    })

    it("shouldRemoveZero removes initial zero in number after operator", () => {
        const buffer = new Buffer(new Provider())
        buffer.expression = buffer.replaceExpression("5+0")
        expect(buffer.expression).toBe("5+0")

        buffer.updateExpression({
            value: "2",
            type: ButtonTypes.Digit
        })

        expect(buffer.expression).toBe("5+2")
    })

    it("updateExpression returns un-modified expression when input data type is System", () => {
        const buffer = new Buffer(new Provider())
        buffer.expression = buffer.replaceExpression("5")
        expect(buffer.expression).toBe("5")

        buffer.updateExpression({
            value: "clear",
            type: ButtonTypes.System
        })

        expect(buffer.expression).toBe("5")
    })

    it("updateExpression adds sign in front of number", () => {
        const buffer = new Buffer(new Provider())
        buffer.expression = buffer.replaceExpression("5")
        expect(buffer.expression).toBe("5")

        buffer.updateExpression({
            value: OperationSymbols["plus-minus"],
            type: ButtonTypes.Sign
        })

        expect(buffer.expression).toBe("-5")
    })

    it("updateExpression returns empty string when no input provided, but plus-minus sign", () => {
        const buffer = new Buffer(new Provider())
        buffer.expression = buffer.replaceExpression("")
        expect(buffer.expression).toBe("")

        buffer.updateExpression({
            value: OperationSymbols["plus-minus"],
            type: ButtonTypes.Sign
        })

        expect(buffer.expression).toBe("")
    })

    it("updateExpression adds separator", () => {
        const buffer = new Buffer(new Provider())
        buffer.updateExpression({
            value: ".",
            type: ButtonTypes.Separator
        })

        expect(buffer.expression).toBe("0.")
    })

    it("updateExpression ignores duplicated separator", () => {
        const buffer = new Buffer(new Provider())
        buffer.expression = buffer.replaceExpression("5.")
        expect(buffer.expression).toBe("5.")
        const spy = jest.spyOn(buffer, "addToExpression")

        buffer.updateExpression({
            value: ".",
            type: ButtonTypes.Separator
        })

        expect(spy).not.toBeCalled()
        expect(buffer.expression).toBe("5.")
    })

    it("updateExpression adds operator", () => {
        const buffer = new Buffer(new Provider())
        buffer.updateExpression({
            value: "+",
            type: ButtonTypes.Operator
        })

        expect(buffer.expression).toBe("0+")
    })

    it("updateExpression adds zero after separator", () => {
        const buffer = new Buffer(new Provider())
        buffer.expression = buffer.replaceExpression("5.")
        expect(buffer.expression).toBe("5.")

        buffer.updateExpression({
            value: "+",
            type: ButtonTypes.Operator
        })

        expect(buffer.expression).toBe("5.0+")
    })

    it("updateExpression ignores duplicated operator", () => {
        const buffer = new Buffer(new Provider())
        buffer.expression = buffer.replaceExpression("5+")
        expect(buffer.expression).toBe("5+")

        buffer.updateExpression({
            value: "+",
            type: ButtonTypes.Operator
        })

        expect(buffer.expression).toBe("5+")
    })

    it("updateExpression replaces previous operator", () => {
        const buffer = new Buffer(new Provider())
        buffer.expression = buffer.replaceExpression("5+")
        expect(buffer.expression).toBe("5+")

        buffer.updateExpression({
            value: "/",
            type: ButtonTypes.Operator
        })

        expect(buffer.expression).toBe("5/")
    })

    it("updateExpression adds digit", () => {
        const buffer = new Buffer(new Provider())
        buffer.updateExpression({
            value: "5",
            type: ButtonTypes.Digit
        })

        expect(buffer.expression).toBe("5")
    })
})
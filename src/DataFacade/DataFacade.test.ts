import { ButtonTypes, OperationSymbols } from "../enums"
import { Provider } from "../Provider"
import { DataFacade } from "./DataFacade"

describe("DataFacade", () => {
    it("is defined", () => {
        const comp = new DataFacade(new Provider())

        expect(comp).toBeDefined()
    })

    it("updateResult gets result from provider on complete expression", () => {
        const facade = new DataFacade(new Provider())
        facade.expression = facade.replaceExpression("5+5")
        expect(facade.expression).toBe("5+5")

        facade.updateExpression({
            value: "+",
            type: ButtonTypes.Operator
        })

        expect(facade.result).toBe("10")
        expect(facade.operand_1).toBe("5")
        expect(facade.operand_2).toBe("5")
        expect(facade.action).toBe("+")
    })

    it("shouldRemoveZero removes initial zero in number", () => {
        const facade = new DataFacade(new Provider())
        facade.expression = facade.replaceExpression("0")
        expect(facade.expression).toBe("0")

        facade.updateExpression({
            value: "5",
            type: ButtonTypes.Digit
        })

        expect(facade.expression).toBe("5")
    })

    it("shouldRemoveZero removes initial zero in number after operator", () => {
        const facade = new DataFacade(new Provider())
        facade.expression = facade.replaceExpression("5+0")
        expect(facade.expression).toBe("5+0")

        facade.updateExpression({
            value: "2",
            type: ButtonTypes.Digit
        })

        expect(facade.expression).toBe("5+2")
    })

    it("updateExpression returns un-modified expression when input data type is System", () => {
        const facade = new DataFacade(new Provider())
        facade.expression = facade.replaceExpression("5")
        expect(facade.expression).toBe("5")

        facade.updateExpression({
            value: "clear",
            type: ButtonTypes.System
        })

        expect(facade.expression).toBe("5")
    })

    it("updateExpression adds sign in front of number", () => {
        const facade = new DataFacade(new Provider())
        facade.expression = facade.replaceExpression("5")
        expect(facade.expression).toBe("5")

        facade.updateExpression({
            value: OperationSymbols["plus-minus"],
            type: ButtonTypes.Sign
        })

        expect(facade.expression).toBe("-5")
    })

    it("updateExpression returns empty string when no input provided, but plus-minus sign", () => {
        const facade = new DataFacade(new Provider())
        facade.expression = facade.replaceExpression("")
        expect(facade.expression).toBe("")

        facade.updateExpression({
            value: OperationSymbols["plus-minus"],
            type: ButtonTypes.Sign
        })

        expect(facade.expression).toBe("")
    })

    it("updateExpression adds separator", () => {
        const facade = new DataFacade(new Provider())
        facade.updateExpression({
            value: ".",
            type: ButtonTypes.Separator
        })

        expect(facade.expression).toBe("0.")
    })

    it("updateExpression ignores duplicated separator", () => {
        const facade = new DataFacade(new Provider())
        facade.expression = facade.replaceExpression("5.")
        expect(facade.expression).toBe("5.")
        const spy = jest.spyOn(facade, "addToExpression")

        facade.updateExpression({
            value: ".",
            type: ButtonTypes.Separator
        })

        expect(spy).not.toBeCalled()
        expect(facade.expression).toBe("5.")
    })

    it("updateExpression adds operator", () => {
        const facade = new DataFacade(new Provider())
        facade.updateExpression({
            value: "+",
            type: ButtonTypes.Operator
        })

        expect(facade.expression).toBe("0+")
    })

    it("updateExpression adds zero after separator", () => {
        const facade = new DataFacade(new Provider())
        facade.expression = facade.replaceExpression("5.")
        expect(facade.expression).toBe("5.")

        facade.updateExpression({
            value: "+",
            type: ButtonTypes.Operator
        })

        expect(facade.expression).toBe("5.0+")
    })

    it("updateExpression ignores duplicated operator", () => {
        const facade = new DataFacade(new Provider())
        facade.expression = facade.replaceExpression("5+")
        expect(facade.expression).toBe("5+")

        facade.updateExpression({
            value: "+",
            type: ButtonTypes.Operator
        })

        expect(facade.expression).toBe("5+")
    })

    it("updateExpression replaces previous operator", () => {
        const facade = new DataFacade(new Provider())
        facade.expression = facade.replaceExpression("5+")
        expect(facade.expression).toBe("5+")

        facade.updateExpression({
            value: "/",
            type: ButtonTypes.Operator
        })

        expect(facade.expression).toBe("5/")
    })

    it("updateExpression adds digit", () => {
        const facade = new DataFacade(new Provider())
        facade.updateExpression({
            value: "5",
            type: ButtonTypes.Digit
        })

        expect(facade.expression).toBe("5")
    })
})
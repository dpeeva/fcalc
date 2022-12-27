import { ButtonTypes, buttonValue } from "../typings"
import { Parser } from "./Parser"
import { DataFacadeMock } from "../mocks"

describe("Parser", () => {
    const parser = new Parser(new DataFacadeMock())

    it("is a function", () => {
        expect(parser).toBeDefined()
    })

    it("clear returns correctly", () => {
        expect(parser.clear()).toEqual("0")
    })

    it("delete returns correctly", () => {
        expect(parser.delete()).toEqual("0")
    })

    it("eval returns correctly", () => {
        expect(parser.eval()).toEqual("0")
    })

    describe("isValidInput", () => {
        it("returns correctly for integer", () => {
            const data = "5"
            const result = parser.isValidInput(data)
            expect(result).toBe(true)
        })

        it("returns correctly for letter", () => {
            const data = "s"
            const result = parser.isValidInput(data as buttonValue)
            expect(result).toBe(false)
        })
    })

    describe("getDisplayData", () => {
        it("calls isValidInput", () => {
            const key = "5"
            const spy = jest.spyOn(parser, "isValidInput")
            const result = parser.getDisplayData(key)
            expect(spy).toHaveBeenCalled()
            expect(result).toEqual(key)
        })

        it("calls parseKey", () => {
            const key = "5"
            // const spy = jest.spyOn(parser, "parseKey")
            const result = parser.getDisplayData(key)
            // expect(spy).toHaveBeenCalled()
            expect(result).toEqual(parser["facade"].result)
        })
    })

    describe("parseKey", () => {
        it("returns correctly for key plus-minus", () => {
            const key = "plus-minus"
            const result = parser.parseKey(key)
            expect(result).toEqual({
                value: "±",
                type: ButtonTypes.Sign
            })
        })

        it("returns correctly for key separator", () => {
            const key = "separator"
            const result = parser.parseKey(key)
            expect(result).toEqual({
                value: ".",
                type: ButtonTypes.Separator
            })
        })
    })

    describe("prepareInputData", () => {
        it("is called from parseKey", () => {
            const key = "5"
            const spy = jest.spyOn(parser, "prepareInputData")
            parser.parseKey(key)
            expect(spy).toHaveBeenCalled()
        })

        // it("returns correctly for digit", () => {
        //     const key = "5"
        //     const result = parser.prepareInputData(key)
        //     expect(result).toEqual({
        //         value: "5",
        //         type: ButtonTypes.Digit
        //     })
        // })

        // it("returns correctly for digit", () => {
        //     const key = "multiply"
        //     const result = parser.prepareInputData(key)
        //     expect(result).toEqual({
        //         value: "*",
        //         type: ButtonTypes.Operator
        //     })
        // })
    })
})
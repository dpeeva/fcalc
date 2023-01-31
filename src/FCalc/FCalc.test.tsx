import { fireEvent, render, screen } from "@testing-library/react"
import { DataFacadeMock, ParserMock, StateStoreMock, FCalcConfigMock } from "../mocks"
import { FCalc } from "./FCalc"

describe("<FCalc />", () => {
    const props = {
        parser: new ParserMock(new DataFacadeMock()),
        state: new StateStoreMock(),
        config: FCalcConfigMock
    }

    const instance = new FCalc({ ...props })

    it("is a function", () => {
        expect(typeof FCalc).toBe("function")
    })

    it("is an instance", () => {
        expect(instance).toBeInstanceOf(FCalc)
    })

    it("fcalc is rendered on screen", () => {
        render(<FCalc {...props} />)
        expect(screen.getByTestId("fcalc")).not.toBe(undefined)
    })
})
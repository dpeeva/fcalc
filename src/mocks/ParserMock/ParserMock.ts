import { Parser } from "../../Parser"
import { DataFacadeMock } from "../DataFacadeMock"

export class ParserMock extends Parser {
    constructor(facade: DataFacadeMock) {
        super(facade)
    }

    clear = jest.fn()
    delete = jest.fn()
    eval = jest.fn()
    getDisplayData = jest.fn((value: string) => value)
}
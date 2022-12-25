import { Parser } from "../../Parser"
import { BufferMock } from ".."

export class ParserMock extends Parser {
    constructor(facade: BufferMock) {
        super(facade)
    }

    clear = jest.fn()
    delete = jest.fn()
    eval = jest.fn()
    getDisplayData = jest.fn((value: string) => value)
}
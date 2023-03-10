import { DataFacadeMock, ParserMock } from "../../mocks"
import { StateStore } from "../../StateStore"

export class StateStoreMock extends StateStore {
    constructor() {
        super(new ParserMock(new DataFacadeMock()))
    }
}
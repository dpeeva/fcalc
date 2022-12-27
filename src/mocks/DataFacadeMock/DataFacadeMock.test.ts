import { DataFacadeMock } from "./DataFacadeMock"

describe("DataFacadeMock", () => {
    const instance = new DataFacadeMock()

    it("is an instance", () => {
        expect(instance).toBeInstanceOf(DataFacadeMock)
    })
})
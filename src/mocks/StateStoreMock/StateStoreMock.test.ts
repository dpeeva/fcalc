import { StateStoreMock } from "./StateStoreMock"

describe("StateStoreMock", () => {
    const instance = new StateStoreMock()

    it("is an instance", () => {
        expect(instance).toBeInstanceOf(StateStoreMock)
    })
})
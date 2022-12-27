import { DataFacadeMock } from "../DataFacadeMock"
import { ParserMock } from "./ParserMock"

describe("ParserMock", () => {
    const instance = new ParserMock(new DataFacadeMock())

    it("is an instance", () => {
        expect(instance).toBeInstanceOf(ParserMock)
    })

    it("clear", () => {
        instance.clear()
        expect(instance.clear).toHaveBeenCalled()
    })

    it("delete", () => {
        instance.delete()
        expect(instance.delete).toHaveBeenCalled()
    })

    it("eval", () => {
        instance.eval()
        expect(instance.eval).toHaveBeenCalled()
    })

    it("getDisplayData", () => {
        const key = "5"
        instance.getDisplayData(key)
        expect(instance.getDisplayData).toHaveBeenCalled()
        expect(instance.getDisplayData).toHaveBeenCalledWith(key)
    })
})
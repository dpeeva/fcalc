import { fireEvent } from "@testing-library/react"
import { StateStore } from "./StateStore"
import { StateStoreMock } from "../mocks"

describe("StateStore", () => {
    const store = new StateStoreMock()

    it("is a function", () => {
        expect(typeof StateStore).toBe("function")
    })

    it("handles correctly passed key percent", () => {
        const key = "percent"
        store.passKey(key)
        expect(store.result).toEqual("0")
    })

    it("handles correctly passed key clear", () => {
        const key = "clear"
        store.passKey(key)
        expect(store.result).toBeUndefined()
    })

    it("handles correctly passed key delete", () => {
        const key = "delete"
        store.passKey(key)
        expect(store.result).toBeUndefined()
    })

    it("handles correctly passed key equals", () => {
        const key = "equals"
        store.passKey(key)
        expect(store.result).toBeUndefined()
    })

    it("handles correctly passed key eval", () => {
        const key = "eval"
        store.passKey(key)
        expect(store.result).toBeUndefined()
    })

    it("handles correctly passed key digit", () => {
        const key = "5"
        store.passKey(key)
        expect(store.result).toBeUndefined()
    })

    it("passKeyEvent is called on Keyboard press", () => {
        fireEvent.keyDown(document, {
            key: "Enter",
            code: "Enter",
            charCode: 13
        })
        expect(store.result).toBeUndefined()
    })
})
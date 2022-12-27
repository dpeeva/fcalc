import { ButtonTypes } from "../../typings"
import { shouldIgnoreSeparator } from "./shouldIgnoreSeparator"

describe("shouldIgnoreSeparator", () => {
    const separator = {
        value: ".",
        type: ButtonTypes.Separator
    }

    it("returns correctly for preceding integer", () => {
        const result = shouldIgnoreSeparator("52", separator)
        expect(result).toBe(false)
    })

    it("returns correctly for preceding separator", () => {
        const result = shouldIgnoreSeparator(".", separator)
        expect(result).toBe(true)
    })
})
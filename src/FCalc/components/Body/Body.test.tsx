import { fireEvent, render, screen } from "@testing-library/react"
import { config } from "../../../config"
import { Body } from "./Body"

describe("<Body />", () => {
    const handler = jest.fn()
    const props = {
        buttons: config.buttons,
        handler: handler
    }

    it("handler is called on click", () => {
        const comp = render(
            <Body {...props} />
        )
        expect(comp).not.toBe(undefined)
        fireEvent.click(
            screen.getByText(config.buttons[0].label)
        )
        expect(handler).toBeCalled()
    })
})
import { fireEvent, render, screen } from "@testing-library/react"
import { config } from "../../../config"
import { Button } from "./Button"

describe("<Button />", () => {
    const handler = jest.fn()
    const props = {
        ...config.buttons[0],
        handler: handler
    }

    it("handler is called on click", () => {
        const comp = render(
            <Button {...props} />
        )
        expect(comp).not.toBe(undefined)
        fireEvent.click(screen.getByTestId(`calc-button-${props.name}`))
        expect(handler).toBeCalled()
    })
})
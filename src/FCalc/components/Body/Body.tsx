import * as React from "react"
import { ButtonConfigType, buttonValue } from "../../../typings"
import { Button } from "../Button"
import "./Body.css"

interface Props {
    buttons: ButtonConfigType[]
    handler: (key?: buttonValue) => string
}

export const Body: React.FunctionComponent<Props> = ({
    buttons,
    handler
}: Props) => (
    <section className="calc-body">
        <div className="calc-body-inner">
            {buttons.map(
                (button: ButtonConfigType, i: number) => (
                    <Button
                        key={`calc-button-${i}`}
                        name={button.name}
                        type={button.type}
                        label={button.label}
                        isDisabled={button.isDisabled}
                        handler={() => handler(button.name)}
                    />
                )
            )}
        </div>
    </section>
)

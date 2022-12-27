import * as React from "react"
import { ButtonConfigType } from "../../../typings"
import "./Button.css"

export interface Props extends ButtonConfigType {
    handler: (ev: React.SyntheticEvent) => void
}

export const Button: React.FunctionComponent<Props> = ({
    name,
    type,
    label,
    isDisabled,
    handler
}) => (
    <button
        className={`calc-button calc-button-${type.toLowerCase()}`}
        data-testid={`calc-button-${name}`}
        disabled={isDisabled}
        onClick={handler}
    >
        {label}
    </button>
)
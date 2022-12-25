import * as React from "react"
import { IButton } from "../../typings"
import "./Button.css"

export const Button: React.FunctionComponent<IButton> = ({
    name,
    type,
    label,
    isDisabled,
    onClick
}) => (
    <button
        className={`calc-button calc-button-${type.toLowerCase()}`}
        disabled={isDisabled}
        onClick={onClick}
        data-name={name}
    >
        {label}
    </button>
)
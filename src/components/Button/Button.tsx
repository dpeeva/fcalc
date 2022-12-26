import * as React from "react"
import { ButtonNames, ButtonTypes } from "../../enums"
import "./Button.css"

interface Props {
    name: ButtonNames
    type: ButtonTypes
    label: string
    isDisabled: boolean
    onClick: (ev: React.SyntheticEvent) => void
}

export const Button: React.FunctionComponent<Props> = ({
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
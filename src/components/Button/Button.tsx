import * as React from "react"
import { IButton } from "../../typings"
import { ButtonNames } from "../../enums"

export class Button extends React.PureComponent<IButton> {
    name: ButtonNames
    type: string
    label: string
    isDisabled: boolean | false
    onClick: Function

    constructor(props: any) {
        super(props)

        this.name = this.props.name
        this.type = this.props.type
        this.label = this.props.label
        this.isDisabled = this.props.isDisabled
        this.onClick = this.props.onClick
    }

    render() {
        return (
            <button
                className={`calc-button calc-button-${this.props.type.toLowerCase()}`}
                disabled={this.props.isDisabled}
                onClick={this.props.onClick}
            >
                {this.props.label}
            </button>
        )
    }
}
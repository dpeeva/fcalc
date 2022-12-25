import * as React from "react"
import { ButtonNames, ButtonTypes } from "../../enums"
import { Digit, Operator, Separator, System, Sign } from "../Button/ButtonTypes"

export class FCalcButton extends React.PureComponent<{
    name: ButtonNames,
    type: ButtonTypes,
    label: string,
    isDisabled: boolean,
    onClick: Function
}, {}> {

    private getButtonComponent() {
        const ComponentTypeMap = {
            Digit,
            Operator,
            System,
            Separator,
            Sign
        }

        return ComponentTypeMap[this.props.type]
    }

    render() {
        const FCalcButton = this.getButtonComponent()
        return (
            <FCalcButton {...this.props} />
        )
    }
}
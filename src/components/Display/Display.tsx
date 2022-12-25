import * as React from "react"
import { IDisplay } from "../../typings"

export class Display extends React.PureComponent<IDisplay> {
    val: string

    constructor(props: any) {
        super(props)

        this.val = this.props.val
    }

    render() {
        return (
            <div className={`calc-display-field`}>
                {this.props.val}
            </div>
        )
    }
}
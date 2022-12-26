import * as React from "react"
import "./Display.css"

interface Props {
    val: string
}

export class Display extends React.PureComponent<Props> {
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
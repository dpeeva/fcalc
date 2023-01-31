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
            <section className="calc-display">
                {this.props.val}
            </section>
        )
    }
}
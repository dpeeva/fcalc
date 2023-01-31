import * as React from "react"
import "./Display.css"

interface Props {
    val: string
}

export const Display: React.FunctionComponent<Props> = ({
    val
}: Props) => (
    <section className="calc-display">
        {val}
    </section>
)
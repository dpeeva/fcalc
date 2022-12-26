import * as React from "react"
import { config } from "./config"
import { FCalc } from "./FCalc"
import { DataFacade } from "./DataFacade"
import { Parser } from "./Parser"
import { Provider } from "./Provider"
import { StateStore } from "./StateStore"
import "./App.css"

export class App extends React.PureComponent {
    parser: Parser
    state: StateStore

    constructor(props: any) {
        super(props)
        this.parser = new Parser(
            new DataFacade(
                new Provider()
            )
        )
        this.state = new StateStore(this.parser)
    }

    render() {
        return (
            <FCalc {...{
                parser: this.parser,
                state: this.state,
                config: config
            }} />
        )
    }
}
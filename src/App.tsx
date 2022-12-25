import * as React from "react"
import { config } from "./config"
import { FCalc } from "./FCalc"
import { Buffer } from "./Buffer"
import { Parser } from "./Parser"
import { Provider } from "./Provider"
import { StateStore } from "./StateStore"
import "./App.css"

function App() {
    const parser = new Parser(
        new Buffer(
            new Provider()
        )
    )
    const fcalcProps = {
        state: new StateStore(parser),
        parser: parser,
        config: config
    }

    return (
        <div className="App">
            <FCalc {...fcalcProps} />
        </div>
    )
}

export default App

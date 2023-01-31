import * as React from "react"
import { observer } from "mobx-react"
import { observable } from "mobx"
import { ButtonConfigType, FCalcConfig } from "../typings"
import "./FCalc.css"

import { StateStore } from "../StateStore"
import { Parser } from "../Parser"

import { Button, Display } from "./components"
import { Body } from "./components/Body"

interface Props {
    state: StateStore
    parser: Parser
    config: FCalcConfig
}

@observer
export class FCalc extends React.PureComponent<Props> {
    @observable state: StateStore
    @observable parser: Parser

    constructor(props: Props) {
        super(props)

        this.parser = props.parser
        this.state = props.state
    }

    render() {
        return (
            <div className="calc" data-testid="fcalc">
                <Display
                    key={`calc-display-field`}
                    val={this.state.result}
                />
                <Body
                    buttons={this.props.config.buttons}
                    handler={this.state.passKey.bind(this.state)}
                />
            </div>
        )
    }
}
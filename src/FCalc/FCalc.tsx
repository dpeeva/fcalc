import * as React from "react"
import { observable } from "mobx"
import { observer } from "mobx-react"
import { FCalcConfig } from "../typings"
import "./FCalc.css"

import { StateStore } from "../StateStore"
import { Parser } from "../Parser"

import { Button, Display } from "./components"

interface Props {
    state: StateStore
    parser: Parser
    config: FCalcConfig
}

@observer
export class FCalc extends React.Component<Props> {
    private static instance: FCalc
    @observable state: StateStore
    parser: Parser

    constructor(props: Props) {
        super(props)

        this.parser = props.parser
        this.state = props.state
    }

    static getInstance() {
        return FCalc.instance
    }

    renderDisplay() {
        return (
            <section className="calc-display">
                <div className="calc-display-inner">
                    {
                        <Display
                            key={`calc-display-field`}
                            val={this.state.result}
                        />
                    }
                </div>
            </section>
        )
    }

    renderBody() {
        return (
            <section className="calc-body">
                {this.renderButtonsList()}
            </section>
        )
    }

    renderButtonsList() {
        const buttons = this.props.config.buttons

        return (
            <div className="calc-body-inner">
                {buttons.map(
                    (button, i) => {

                        return (
                            <Button
                                key={`calc-button-${i}`}
                                name={button.name}
                                type={button.type}
                                label={button.label}
                                isDisabled={button.isDisabled}
                                onClick={() => this.state.passKey(button.name)}
                            />
                        )
                    }
                )}
            </div>
        )
    }

    render() {
        return (
            <div className="calc" data-testid="fcalc">
                {this.renderDisplay()}
                {this.renderBody()}
            </div>
        )
    }
}
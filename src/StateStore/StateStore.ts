import { observable, action } from "mobx"
import { buttonKey, ButtonKeys, buttonValue } from "../enums"
import { Parser } from "../Parser"

export class StateStore {
    @observable public result: string
    public parser: Parser

    constructor(parser: Parser) {
        this.result = this.passKey()
        this.parser = parser

        this.attachListeners()
    }

    private attachListeners(): void {
        document.addEventListener("keydown", this.passKeyEvent.bind(this), false)
    }

    private passKeyEvent(e: KeyboardEvent) {
        this.passKey(ButtonKeys[e.key as buttonKey])
    }

    @action passKey(key?: buttonValue): string {
        console.log(key)
        if (!key) {
            this.result = "0"
            return this.result
        }

        if (this.parser.parseKey(key)) {
            // TODO: simplify checks
            if (key === "clear" || key === "delete" || key === "eval") {
                this.result = this.parser[key]()
            }
            return this.result
        }

        if (key === "equals" || key === "eval") {
            this.result = this.parser.eval()
            return this.result
        }

        // TODO: Implement logic for %
        if (key === "percent") {
            this.result = "0"
            return this.result
        }

        this.result = this.parser.getDisplayData(key)
        return this.result
    }
}
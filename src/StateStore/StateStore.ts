import { observable, action, makeAutoObservable } from "mobx"
import { buttonKey, ButtonKeys, buttonValue } from "../enums"
import { Parser } from "../Parser"

export class StateStore {
    @observable public result: string
    public parser: Parser

    constructor(parser: Parser) {
        makeAutoObservable(this)
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
        if (!this.parser || !key) {
            this.result = "0"
            return this.result
        }

        if (key === "clear") {
            this.result = this.parser.clear()
            return this.result
        }

        if (key === "delete") {
            this.result = this.parser.delete()
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

        // if (this.parser[key]) {
        //     this.result = this.parser[key]()
        //     return this.result
        // }

        this.result = this.parser.getDisplayData(key)
        return this.result
    }
}
import { observable, action } from "mobx"
import { OperationsProvider } from "../typings"

/* Operations Provider acts like Retriever */
export class Provider implements OperationsProvider {
    @observable result: number

    constructor() {
        this.result = 0
    }

    updateResult(operand_1?: string, operand_2?: string, action?: string): number {
        if (arguments.length < 3) {
            return this.result
        }

        const o_1 = this.getOperand(operand_1)
        const o_2 = this.getOperand(operand_2)

        switch (action) {
            case "+":
                return this.result = this.add(o_1, o_2)
            case "-":
                return this.result = this.subtract(o_1, o_2)
            case "*":
                return this.result = this.multiply(o_1, o_2)
            case "/":
                return this.result = this.divide(o_1, o_2)
            default:
                return this.result
        }
    }

    getOperand(operand?: string): number {
        return operand ? parseFloat(operand) : 0
    }

    @action add(a?: number, b?: number): number {
        if (a === undefined || b === undefined) {
            return 0
        }
        return a + b
    }

    @action subtract(a?: number, b?: number): number {
        if (a === undefined || b === undefined) {
            return 0
        }
        return a - b
    }

    @action multiply(a?: number, b?: number): number {
        if (a === undefined || b === undefined) {
            return 0
        }
        return a * b
    }

    @action divide(a?: number, b?: number): number {
        if (a === undefined || b === undefined) {
            return 0
        }
        return a / b
    }
}
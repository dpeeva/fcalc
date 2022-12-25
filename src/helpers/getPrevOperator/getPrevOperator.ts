import { OperationSymbols, operationValue } from "../../enums"

export const getPrevOperator = (operator: string): operationValue =>
    operator === "-"
        ? "+"
        : "-"
import { operationValue } from "../../typings"

export const getPrevOperator = (operator: string): operationValue =>
    operator === "-" ? "+" : "-"
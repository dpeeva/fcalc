const operationsSymbols = [
    { key: "percent", value: "%" },
    { key: "divide", value: "/" },
    { key: "multiply", value: "*" },
    { key: "minus", value: "-" },
    { key: "plus", value: "+" },
    { key: "plus-minus", value: "±" },
    { key: "separator", value: "." },
    { key: "equals", value: "=" },
] as const

export type operationKey = typeof operationsSymbols[number]["key"]
export type operationValue = typeof operationsSymbols[number]["value"]

export const OperationSymbols = {
    "percent": "%",
    "divide": "/",
    "multiply": "*",
    "minus": "-",
    "plus": "+",
    "plus-minus": "±",
    "separator": ".",
    "equals": "="
}
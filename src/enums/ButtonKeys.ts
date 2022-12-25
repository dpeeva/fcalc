const buttons = [
    { key: "Backspace", value: "delete" },
    { key: "Escape", value: "clear" },
    { key: "0", value: "0" },
    { key: "1", value: "1" },
    { key: "2", value: "2" },
    { key: "3", value: "3" },
    { key: "4", value: "4" },
    { key: "5", value: "5" },
    { key: "6", value: "6" },
    { key: "7", value: "7" },
    { key: "8", value: "8" },
    { key: "9", value: "9" },
    { key: "=", value: "equals" }, // "eval"
    { key: "/", value: "divide" },
    { key: "*", value: "multiply" },
    { key: "+", value: "plus" },
    { key: "-", value: "minus" },
    { key: "%", value: "percent" },
    { key: "±", value: "plus-minus" },
    { key: ".", value: "separator" },
    { key: "Enter", value: "eval" },
] as const

export type buttonKey = typeof buttons[number]["key"]
export type buttonValue = typeof buttons[number]["value"]

export const ButtonKeys: Record<buttonKey, buttonValue> = {
    Backspace: "delete",
    Escape: "clear",
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    "=": "equals", // "eval"
    "/": "divide",
    "*": "multiply",
    "+": "plus",
    "-": "minus",
    "%": "percent",
    "±": "plus-minus",
    ".": "separator",
    Enter: "eval"
}
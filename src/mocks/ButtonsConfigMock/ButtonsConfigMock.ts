import { ButtonTypes, ButtonNames } from "../../enums"
import { ButtonConfigType } from "../../typings"

export const ButtonsConfigMock: ButtonConfigType[] = [
    {
        name: ButtonNames.escape,
        type: ButtonTypes.System,
        label: "C",
        isDisabled: false
    },
    {
        name: ButtonNames.percent,
        type: ButtonTypes.System,
        label: "%",
        isDisabled: true
    },
    {
        name: ButtonNames.backspace,
        type: ButtonTypes.System,
        label: "←",
        isDisabled: false
    },
    {
        name: ButtonNames.divide,
        type: ButtonTypes.Operator,
        label: "÷",
        isDisabled: false
    },
    {
        name: ButtonNames.seven,
        type: ButtonTypes.Digit,
        label: "7",
        isDisabled: false
    },
    {
        name: ButtonNames.eight,
        type: ButtonTypes.Digit,
        label: "8",
        isDisabled: false
    },
    {
        name: ButtonNames.nine,
        type: ButtonTypes.Digit,
        label: "9",
        isDisabled: false
    },
    {
        name: ButtonNames.multiply,
        type: ButtonTypes.Operator,
        label: "*",
        isDisabled: false
    },
    {
        name: ButtonNames.four,
        type: ButtonTypes.Digit,
        label: "4",
        isDisabled: false
    },
    {
        name: ButtonNames.five,
        type: ButtonTypes.Digit,
        label: "5",
        isDisabled: false
    },
    {
        name: ButtonNames.six,
        type: ButtonTypes.Digit,
        label: "6",
        isDisabled: false
    },
    {
        name: ButtonNames.minus,
        type: ButtonTypes.Operator,
        label: "-",
        isDisabled: false
    },
    {
        name: ButtonNames.one,
        type: ButtonTypes.Digit,
        label: "1",
        isDisabled: false
    },
    {
        name: ButtonNames.two,
        type: ButtonTypes.Digit,
        label: "2",
        isDisabled: false
    },
    {
        name: ButtonNames.three,
        type: ButtonTypes.Digit,
        label: "3",
        isDisabled: false
    },
    {
        name: ButtonNames.plus,
        type: ButtonTypes.Operator,
        label: "+",
        isDisabled: false
    },
    {
        name: ButtonNames.plus_minus,
        type: ButtonTypes.Sign,
        label: "±",
        isDisabled: false
    },
    {
        name: ButtonNames.zero,
        type: ButtonTypes.Digit,
        label: "0",
        isDisabled: false
    },
    {
        name: ButtonNames.separator,
        type: ButtonTypes.Separator,
        label: ".",
        isDisabled: false
    },
    {
        name: ButtonNames.equals,
        type: ButtonTypes.Operator,
        label: "=",
        isDisabled: false
    }
]
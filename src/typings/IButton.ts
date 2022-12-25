import { ButtonTypes, ButtonNames } from "../enums"

export interface IButton {
    name: ButtonNames
    type: ButtonTypes
    label: string
    isDisabled: boolean
    onClick: any
}
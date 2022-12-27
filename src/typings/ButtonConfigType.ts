import { ButtonNames, ButtonTypes } from "../enums"

export interface ButtonConfigType {
    name: ButtonNames
    type: ButtonTypes
    label: string
    isDisabled: boolean
}
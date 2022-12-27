import { ButtonNames, ButtonTypes } from "../typings"

export interface ButtonConfigType {
    name: ButtonNames
    type: ButtonTypes
    label: string
    isDisabled: boolean
}
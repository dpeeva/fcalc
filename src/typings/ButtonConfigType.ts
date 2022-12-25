import { ButtonNames, ButtonTypes } from "../enums"

export type ButtonConfigType = {
    name: ButtonNames
    type: ButtonTypes
    label: string
    isDisabled: boolean
}
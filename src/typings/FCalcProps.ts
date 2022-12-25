import { StateStore } from "../StateStore"
import { Parser } from "../Parser"
import { FCalcConfig } from "./FCalcConfig"

export type FCalcProps = {
    state: StateStore
    parser: Parser
    config: FCalcConfig
}
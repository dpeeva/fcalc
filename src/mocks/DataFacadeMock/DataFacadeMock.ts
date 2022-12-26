import { DataFacade } from "../../DataFacade"
import { Provider } from "../../Provider"

export class DataFacadeMock extends DataFacade {
    constructor() {
        super(new Provider())
    }
}
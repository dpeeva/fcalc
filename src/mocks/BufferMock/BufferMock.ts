import { Buffer } from "../../Buffer"
import { Provider } from "../../Provider"

export class BufferMock extends Buffer {
    constructor() {
        super(new Provider())
    }
}
import { datatyperesult } from "./datatyperesult.model";

export class Datatype {
    constructor(
        public count: number  = 0,
        public next:string = '',
        public previuos:string = '',
        public data: datatyperesult,
    ) { }
}
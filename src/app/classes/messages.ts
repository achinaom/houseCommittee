import { Time } from "@angular/common";

export class Messages{

    constructor(public MessagesId?:number,public MessageContent?:string,public BuildingId?:number,public DayarId?:number,
        public Situation?:number, public DateMessage?:Date,public TimeMessage?:Time,public SenderName?:string){}
        //Situation?:short
}
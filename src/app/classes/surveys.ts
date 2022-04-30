import { Time } from "@angular/common";

export class Surveys{

    constructor(public SurveyId?:number,public SubSurvey?:string,public Content?:boolean,public StartDate?:Date,
        public EndDate?:Date,public DayarId?:number,public Result?:string,
        public NumAnswers?:number, public BuildingId?:number, public Type?:string, public Op1?:string,public Op2?:string,public Re1?:number,public Re2?:number,public ExpireDate?:Date){}
}
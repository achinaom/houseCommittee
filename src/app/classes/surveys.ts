

export class Surveys{

    constructor(public SurveyId?:number,public SubSurvey?:string,public Content?:boolean,public StartDate?:Date,
        public EndDate?:Date,public DayarId?:number,public Result?:string,
        public NumAnswers?:number, public BuildingId?:number, public Type?:string, public Op1?:string,public Op2?:string,public Op3?:string,public Op4?:string,public Op5?:string,public Op6?:string,public Re1?:number,
        public Re2?:number,public Re3?:number,public Re4?:number,public Re5?:number,public Re6?:number,public ExpireDate?:Date,public NumOp?:number){}
}
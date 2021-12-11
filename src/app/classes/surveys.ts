export class Surveys{

    constructor(public SurveyId?:number,public SubSurvey?:string,public Content?:string,public StartDate?:Date,
        public EndDate?:Date,public DayarId?:number,public Result?:boolean,
        public NumAnswers?:number, public BuildingId?:number){}
}
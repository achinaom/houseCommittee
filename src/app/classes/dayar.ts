export class Dayar{
    // id :number;
    // firstName: string;
    // lastName: string;
    // email: any;//מייל ובדיקת ולידציה
    // phone: string;
    // code: any;
    // verifyCode: any;//ווידוא קוד
    // numOfFlats: number;//מספר דירות בבנין
    // numaOfFloor: number;//מספר הדירה שלי
    // public int DayarId { get; set; }
    // public string FirstName { get; set; }
    // public string LastName { get; set; }
    // public string PsWord { get; set; }
    // public string MailAddress { get; set; }
    // public string Phone { get; set; }
    // public int StateOfSum { get; set; }
    // public bool IsHouseCommittee { get; set; }
    // public int BuildingId { get; set; }
    // public int? TypeUserId { get; set; }


    //firstName: string;
     //numApartment: number;
     //floor: number;
     //sumForMonth: number;
     //phone: string;
     //email: string;
    constructor(public DayarId?:number,public FirstName?:string,public LastName?:string,public MailAddress?:string,
        public Phone?:string,public PsWord?:string,public StateOfSum?:number,
        public IsHouseCommittee?:boolean, public BuildingId?:number,
        public NumFlat?: number,
        public Floor?: number,public SumToMonth?: number){// sumForMonth?NumFlat
           
        // this.id=id;
        // this.firstName=firstName;
        // this.lastName=lastName;
        // this.email=email;
        // this.phone=phone;
        // this.code=code;
        // this.verifyCode=verifyCode;
        // this.numOfFlats=numOfFlats;
        // this.numaOfFloor=numaOfFloor;
        
        }
}

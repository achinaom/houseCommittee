export class Building{
//city: string;
//street: string;
//houseNumber: number;
//entry: string;

//constructor(city?,street?,houseNumber?,entry?){
//this.city = city;
//this.street = street;
//this.houseNumber = houseNumber;
//this.entry = entry;
//}

constructor(public BuildingId?:number,public CityId?:number,public Floors?:number,public Flats?:number,
    public Street?:string,public NumBuilding?:number,
    // public city?: string,public entry?: string,
    public idCom?:number///קוד ועד הבית
    ){}
    //city? , entry?
}
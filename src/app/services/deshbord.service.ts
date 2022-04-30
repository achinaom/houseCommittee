import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Deshbord } from '../classes/deshbord';

@Injectable({
    providedIn: 'root'
  })
  export class DeshbordService {
  
    constructor(public http:HttpClient) { }

  deshbord : Deshbord = new Deshbord();
 
  url="https://localhost:44339/api/Deshbord/"
  
  addDeshbord(deshbord:Deshbord):Observable<Deshbord>
  {debugger
    return this.http.post<Deshbord>(this.url+"addDeshbord",deshbord)
  }
  getDeshbord(buildingId :number):Observable<Deshbord>
  {
      debugger
      return this.http.get<Deshbord>(this.url+"getDeshbord/"+buildingId)
  }
//   editStatus(buildingId:number):Observable<boolean>
//   {debugger
//       return this.http.post<boolean>(this.url+"editStatus",buildingId)
//   }
editHachnasot(buildingId:number,sumToAdd:number):Observable<boolean>
{
    debugger
    return this.http.get<boolean>(this.url+"editHachnasot/"+buildingId+"/"+sumToAdd)
}
editHotzaot(buildingId:number,sumToSub:number):Observable<boolean>
{
    debugger
    return this.http.get<boolean>(this.url+"editHotzaot/"+buildingId+"/"+sumToSub)
}
// editHachnasot(buildingId:number,deshbordToEdit:Deshbord):Observable<boolean>
// {
//     debugger
//     return this.http.put<boolean>(this.url+"editHachnasot/"+buildingId,deshbordToEdit)
// }
  }
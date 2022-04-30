import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Takalot } from '../classes/takalot';

@Injectable({
  providedIn: 'root'
})
export class TakalotService {

  constructor(public http:HttpClient) { }
  takalot:Takalot
url="https://localhost:44339/api/Takalot/"

//url="https://localhost:7201/api/Takalot/"

// GetAll():Observable<Array<Takalot>>
// {
//   debugger
//   return this.http.get<Array<Takalot>>(this.url+"GetAll")
// }
GetAllById(buildingId:number):Observable<Array<Takalot>>
{
  debugger
  return this.http.get<Array<Takalot>>(this.url+"GetAllById/"+buildingId)
}

GetTakalaByCategoryId(id:number,buildingId:number):Observable<Array<Takalot>>
{
  return this.http.get<Array<Takalot>>(this.url+"GetTakalaByCategoryId/"+id+"/"+buildingId)
}

GetTakalaByUrgencyId(id:number,buildingId:number):Observable<Array<Takalot>>
{
  return this.http.get<Array<Takalot>>(this.url+"GetTakalaByUrgencyId/"+id+"/"+buildingId)
}

GetTakalaByStatusId(id:number,buildingId:number):Observable<Array<Takalot>>
{
  return this.http.get<Array<Takalot>>(this.url+"GetTakalaByStatusId/"+id+"/"+buildingId)
}

AddTakala(t:Takalot):Observable<Array<Takalot>>
{
debugger
  return this.http.post<Array<Takalot>>(this.url+"AddTakala",t)
}
EditTakala(num:number,takala:Takalot):Observable<Array<Takalot>>
{
debugger
  return this.http.put<Array<Takalot>>(this.url+"EditTakala/"+num,takala)
}

}
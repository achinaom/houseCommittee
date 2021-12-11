import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dayar } from '../classes/dayar';

@Injectable({
  providedIn: 'root'
})
export class DayarService {

  constructor(public http:HttpClient) { }
dayar:Dayar
url="https://localhost:44339/api/Dayar/"
addDayar(d:Dayar):Observable<Dayar>
{
  return this.http.post<Dayar>(this.url+"addDayar",d)
}

GetAll():Observable<Array<Dayar>>
{
  return this.http.get<Array<Dayar>>(this.url+"GetAll")
}
getByMailAndPass(m:string,p:string):Observable<Dayar>
{
  return this.http.get<Dayar>(this.url+"Enter/"+m+"/"+p)
}
GetAllById(id:number):Observable<Array<Dayar>>
{
  return this.http.get<Array<Dayar>>(this.url+"GetAllById/"+id)

}
}

   


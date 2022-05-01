import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cities } from '../classes/cities';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

constructor(public http:HttpClient) {}
cities:Cities
url="https://localhost:44339/api/Cities/"
GetAllCities():Observable<Array<Cities>>
   {
      return this.http.get<Array<Cities>>(this.url+"GetAllCities")
    }
getNameCity(cityId:number):Observable<Cities>
{
  debugger
  return this.http.get<Cities>(this.url+"getNameCity/"+cityId);
}    
}
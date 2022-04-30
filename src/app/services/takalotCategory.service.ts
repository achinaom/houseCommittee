import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TakalotCategory } from '../classes/takalotCategory';

@Injectable({
  providedIn: 'root'
})
export class TakalotCategoryService {

  constructor(public http:HttpClient) { }
  takalotCategory:TakalotCategory
url="https://localhost:44339/api/TakalotCategory/"
//url="https://localhost:7201/api/TakalotCategory/"

GetAll():Observable<Array<TakalotCategory>>
{
  debugger
  return this.http.get<Array<TakalotCategory>>(this.url+"GetAll")
}

}
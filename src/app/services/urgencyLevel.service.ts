import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrgencyLevel } from '../classes/urgencyLevel';

@Injectable({
  providedIn: 'root'
})
export class UrgencyLevelService {

  constructor(public http:HttpClient) { }
  urgencyLevel:UrgencyLevel
url="https://localhost:44339/api/UrgencyLevel/"

//url="https://localhost:7201/api/UrgencyLevel/"

GetAll():Observable<Array<UrgencyLevel>>
{
  debugger
  return this.http.get<Array<UrgencyLevel>>(this.url+"GetAll")
}
}
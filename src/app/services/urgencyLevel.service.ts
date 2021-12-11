import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrgencyLevel } from '../classes/urgencyLevel';

@Injectable({
  providedIn: 'root'
})
export class UrgencyLevelService {

  constructor(public http:HttpClient) { }
  urgencyLevel:UrgencyLevel
//url="https://localhost:44339/api/UrgencyLevel/"

}
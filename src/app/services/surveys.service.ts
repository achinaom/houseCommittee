import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Surveys } from '../classes/surveys';

@Injectable({
  providedIn: 'root'
})
export class SurveysService {

  constructor(public http:HttpClient) { }
  surveys:Surveys
//url="https://localhost:44339/api/Surveys/"

}
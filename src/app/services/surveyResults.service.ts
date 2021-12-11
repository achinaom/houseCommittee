import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SurveyResults } from '../classes/surveyResults';

@Injectable({
  providedIn: 'root'
})
export class SurveyResultsService {

  constructor(public http:HttpClient) { }
  surveyResults:SurveyResults
//url="https://localhost:44339/api/SurveyResults/"

}
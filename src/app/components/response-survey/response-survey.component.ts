import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-response-survey',
  templateUrl: './response-survey.component.html',
  styleUrls: ['./response-survey.component.css']
})
export class ResponseSurveyComponent implements OnInit {

  constructor(public r:Router) { }

  ngOnInit(): void {
  }
  survey(){
    this.r.navigate(['/headCommittee/enterTheSurvey/77']);
    //this.r.navigate['/dayar/enterTheSurvey'];
    //http://localhost:4200/headCommittee/enterTheSurvey/77
  }
}

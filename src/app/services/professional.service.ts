import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Professional } from '../classes/professional';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  constructor(public http:HttpClient) { }
  professional:Professional
//url="https://localhost:44339/api/Professional/"

}
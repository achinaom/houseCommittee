import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfessionalCategory } from '../classes/professionalCategory';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalCategoryService {

  constructor(public http:HttpClient) { }
  professionalCategory:ProfessionalCategory
//url="https://localhost:44339/api/ProfessionalCategory/"

}
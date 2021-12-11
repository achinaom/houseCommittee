import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TakalotCategory } from '../classes/takalotCategory';

@Injectable({
  providedIn: 'root'
})
export class TakalotCategoryService {

  constructor(public http:HttpClient) { }
  takalotCategory:TakalotCategory
//url="https://localhost:44339/api/TakalotCategory/"

}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypeExpenses } from '../classes/typeExpenses';

@Injectable({
  providedIn: 'root'
})
export class TypeExpensesService {

  constructor(public http:HttpClient) { }
  typeExpenses:TypeExpenses
//url="https://localhost:44339/api/TypeExpenses/"

}
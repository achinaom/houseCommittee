import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BuildingExpenses } from '../classes/buildingExpenses';

@Injectable({
  providedIn: 'root'
})
export class BuildingExpensesService {

  constructor(public http:HttpClient) { }
buildingExpenses:BuildingExpenses
//url="https://localhost:44339/api/BuildingExpenses/"

}
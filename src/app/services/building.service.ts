import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Building } from '../classes/building';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  constructor(public http:HttpClient) { }
building:Building
//url="https://localhost:44339/api/Building/"

}

   


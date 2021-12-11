import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Takalot } from '../classes/takalot';

@Injectable({
  providedIn: 'root'
})
export class TakalotService {

  constructor(public http:HttpClient) { }
  takalot:Takalot
//url="https://localhost:44339/api/Takalot/"

}
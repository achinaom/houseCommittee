import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gviyot } from '../classes/gviyot';

@Injectable({
  providedIn: 'root'
})
export class GviyotService {

  constructor(public http:HttpClient) { }
  gviyot:Gviyot
//url="https://localhost:44339/api/Gviyot/"

}
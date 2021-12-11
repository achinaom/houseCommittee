import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypeUser } from '../classes/typeUser';

@Injectable({
  providedIn: 'root'
})
export class TypeUserService {

  constructor(public http:HttpClient) { }
  typeUser:TypeUser
//url="https://localhost:44339/api/TypeUser/"

}
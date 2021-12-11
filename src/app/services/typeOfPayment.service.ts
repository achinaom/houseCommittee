import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypeOfPayment } from '../classes/typeOfPayment';

@Injectable({
  providedIn: 'root'
})
export class TypeOfPaymentService {

  constructor(public http:HttpClient) { }
  typeOfPayment:TypeOfPayment
//url="https://localhost:44339/api/TypeOfPayment/"

}
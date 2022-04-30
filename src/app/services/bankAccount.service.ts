import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BankTransfers } from '../classes/bankTransfers';


@Injectable({
  providedIn: 'root'
})
export class BankAccountService {
    bankAccount: BankTransfers = new BankTransfers();

  constructor(public http:HttpClient) { }

  url="https://localhost:44339/api/BankAccount/"

  addBankAccount(b:BankTransfers):Observable<BankTransfers>
  {
    debugger
    return this.http.post<BankTransfers>(this.url+"addBankAccount",b)
  }
  
}
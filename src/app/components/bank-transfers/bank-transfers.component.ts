import { Component, OnInit } from '@angular/core';
import { BankTransfers } from 'src/app/classes/bankTransfers';

@Component({
  selector: 'app-bank-transfers',
  templateUrl: './bank-transfers.component.html',
  styleUrls: ['./bank-transfers.component.css']
})
export class BankTransfersComponent implements OnInit {

  bankTransfers:BankTransfers = new BankTransfers()
  constructor() { }

  ngOnInit(): void {
  }

}

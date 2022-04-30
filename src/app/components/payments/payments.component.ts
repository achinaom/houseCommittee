import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/classes/payment';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  constructor(private paySer:PaymentService) { }

  allPayments:Array<Payment>=new Array<Payment>()

  ngOnInit(): void {
    this.paySer.GetAll().subscribe(
      data=>{
        debugger
        this.allPayments=data;
        console.log("succ!!");
        console.log(data);
      },
      err=>{
        debugger
        console.log(err);
      }
    )
  }

}
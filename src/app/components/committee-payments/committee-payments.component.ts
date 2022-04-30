import { Component, OnInit } from '@angular/core';
import { Cities } from 'src/app/classes/cities';
import { DayarService } from 'src/app/services/dayar.service';
import { PaymentService } from 'src/app/services/payment.service';
import { PaymentsComponent } from '../payments/payments.component';

@Component({
  selector: 'app-committee-payments',
  templateUrl: './committee-payments.component.html',
  styleUrls: ['./committee-payments.component.css']
})
export class CommitteePaymentsComponent implements OnInit {

  constructor(public paymentSer: PaymentService,public dayarSer:DayarService) { }
  cities:Cities[];
  ngOnInit(): void {
  
  
    this.dayarSer.GetAllById(this.dayarSer.dayar.BuildingId).subscribe(
      data => {
        this.dayarSer.listD = data;
        debugger   
      },
     (err) => {console.log(err)}
    );
    
}
}

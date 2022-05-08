import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dayar } from '../../classes/dayar';
import { DayarService } from '../../services/dayar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dSer:DayarService,public r:Router) { }
  d:Dayar=new Dayar()
  ngOnInit(): void {
  }
enter()
{
  this.dSer.getByMailAndPass(this.d.MailAddress,this.d.PsWord).subscribe(
  d=>{
    debugger
    this.dSer.dayar=d;
    if(this.dSer.dayar==null)
    alert("לא קיים במערכת");
    else
      if(this.dSer.dayar.IsHouseCommittee===true)
         this.r.navigate(['/head-committee'])
    else
      this.r.navigate(['/dayar'])
 },
  e=>{alert("err")}
)
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dayar } from 'src/app/classes/dayar';
import { BuildingService } from 'src/app/services/building.service';
import { DayarService } from 'src/app/services/dayar.service';
import {Location} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-dayar',
  templateUrl: './edit-dayar.component.html',
  styleUrls: ['./edit-dayar.component.css']
})
export class EditDayarComponent implements OnInit {
  @Input()
  dayar:Dayar;
  @Output()
 onSave:EventEmitter<Dayar> = new EventEmitter<Dayar>();

  constructor(public buildingSer:BuildingService, public dayarSer:DayarService,private location:Location,public r:Router) { }

  ngOnInit(): void {
  }

save(){
  debugger
  this.onSave.emit(this.dayar);
//   this.dayarSer.IfMailExsist(this.dayar.MailAddress).subscribe(
//   d=>{
//     if(d==true)
    
//     alert("מייל זה מופיע במערכת");
//     //else
//    // this.location.back();
//   debugger
// },
//   err=>{console.log(err);}
//   )

 
 //this.r.navigate(['/headCommittee/list-dayarim']);
}
back(){
  this.onSave.emit(null);
  //this.r.navigate(['/headCommittee/list-dayarim']);
}
}

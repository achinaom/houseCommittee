import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Deshbord } from 'src/app/classes/deshbord';
import { DeshbordService } from 'src/app/services/deshbord.service';
import {Location} from '@angular/common';
import { DayarService } from 'src/app/services/dayar.service';

@Component({
  selector: 'app-hotzaot',
  templateUrl: './hotzaot.component.html',
  styleUrls: ['./hotzaot.component.css']
})
export class HotzaotComponent implements OnInit {

  @Input()
  deshbord:Deshbord;
  @Output()
 onSave:EventEmitter<Deshbord> = new EventEmitter<Deshbord>();
 hotzaot:number
  constructor(public deshbordSer:DeshbordService,public location:Location,public dayarSer:DayarService) { }

  ngOnInit(): void {
  }
  save(){
    this.deshbordSer.editHotzaot(this.dayarSer.dayar.BuildingId,this.hotzaot).subscribe(
      d=>{
       if(d===false) 
       alert("err")
       else
      this.location.back();
      },err=>{alert(err)}
    )
  }
  back(){  this.location.back();}
  // save(){
  //   debugger
  //   this.onSave.emit(this.deshbord);
  // }
  // back(){
  //   debugger
  //   this.onSave.emit(null);
   
  // }

}

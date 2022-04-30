import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Deshbord } from 'src/app/classes/deshbord';
import { DayarService } from 'src/app/services/dayar.service';
import { DeshbordService } from 'src/app/services/deshbord.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-hachnasot',
  templateUrl: './hachnasot.component.html',
  styleUrls: ['./hachnasot.component.css']
})
export class HachnasotComponent implements OnInit {

  @Input()
  deshbord:Deshbord;
  @Output()
 onSave:EventEmitter<Deshbord> = new EventEmitter<Deshbord>();
hachnasot:number;
  constructor(public deshbordSer:DeshbordService,public dayarSer:DayarService ,public location:Location) { }

  ngOnInit(): void {
  }
  save(){
    this.deshbordSer.editHachnasot(this.dayarSer.dayar.BuildingId,this.hachnasot).subscribe(
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
  //   this.onSave.emit(null);
   
  // }
}

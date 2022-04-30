import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dayar } from 'src/app/classes/dayar';
import { Deshbord } from 'src/app/classes/deshbord';
import { DayarService } from 'src/app/services/dayar.service';
import { DeshbordService } from 'src/app/services/deshbord.service';

@Component({
  selector: 'app-deshbord',
  templateUrl: './deshbord.component.html',
  styleUrls: ['./deshbord.component.css']
})
export class DeshbordComponent implements OnInit {

  constructor(public deshbordSer : DeshbordService,public dayarSer:DayarService,public r:Router) { }
deshbord : Deshbord = new Deshbord();
deshbordToEdit : Deshbord
hachnasot:number
isShow:number=0;
  ngOnInit(): void {
this.getDeshbord();
  }
  getDeshbord(){
    this.deshbordSer.getDeshbord(this.dayarSer.dayar.BuildingId).subscribe(
      data=>{
        debugger
    if(data === null)
    alert("problemo")
    else
    this.deshbord = data;
      },err=>{alert(err)}
    )
  }
  editHachnasot(deshbord:Deshbord){
    debugger
    this.deshbordToEdit = deshbord;
    this.isShow=1;
  }
  editHotzaot(deshbord:Deshbord){
    debugger
    this.deshbordToEdit = deshbord;
    this.isShow=2;
  }
//   onMySave(deshbordToEdit:Deshbord){
//     debugger
//     if(deshbordToEdit!=null)
// {
//     this.deshbordSer.editHachnasot(this.dayarSer.dayar.BuildingId,deshbordToEdit).subscribe(
//          d=>{
//            debugger
//           this.isShow = 0;
//           this.getDeshbord();
//          },err=>{alert(err)}
//       )
//     }
//     else
//     this.isShow = 0;
//   }
}

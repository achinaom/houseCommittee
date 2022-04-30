import { Component, OnInit } from '@angular/core';
import { Building } from 'src/app/classes/building';
import { BuildingService } from 'src/app/services/building.service';
import { DayarService } from 'src/app/services/dayar.service';

@Component({
  selector: 'app-dayar',
  templateUrl: './dayar.component.html',
  styleUrls: ['./dayar.component.css']
})
export class DayarComponent implements OnInit {

  constructor(public d:DayarService, public buildingSer:BuildingService,public dayarSer:DayarService) { }
  building:Building;
  ngOnInit(): void {
    this.d.dayar.FirstName
    this.d.dayar.LastName

    this.buildingSer.getAddress(this.dayarSer.dayar.BuildingId).subscribe(
      data=>{
        debugger
  if(data==null)
  alert("problem")
  else
  this.building = data;
      }, err=>{alert(err)})
  }

}

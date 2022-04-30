import { Component, OnInit } from '@angular/core';
import { Building } from 'src/app/classes/building';
import { BuildingService } from 'src/app/services/building.service';
import { CitiesService } from 'src/app/services/cities.service';
import { DayarService } from 'src/app/services/dayar.service';

@Component({
  selector: 'app-head-committee',
  templateUrl: './head-committee.component.html',
  styleUrls: ['./head-committee.component.css']
})
export class HeadCommitteeComponent implements OnInit {

constructor(public d:DayarService, public buildingSer:BuildingService,public dayarSer:DayarService,public citiesSer:CitiesService) { }

city:string;
  ngOnInit(): void {
    this.d.dayar.FirstName
    this.d.dayar.LastName
debugger
    
  this.buildingSer.getAddress(this.dayarSer.dayar.BuildingId).subscribe(
data=>{
 debugger
if(data==null)
alert("problem")
else
{
this.buildingSer.buildingAddress = data;
this.citiesSer.getNameCity(this.buildingSer.buildingAddress.CityId).subscribe(
  d=>{
  debugger
this.city = d;
 }, err=>{alert(err)})
} 
}, err=>{alert(err)})
 

 
} 
}

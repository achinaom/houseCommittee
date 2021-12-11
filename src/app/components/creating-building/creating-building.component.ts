import { Component, OnInit } from '@angular/core';
import { Building } from '../../classes/building';

@Component({
  selector: 'app-creating-building',
  templateUrl: './creating-building.component.html',
  styleUrls: ['./creating-building.component.css']
})
export class CreatingBuildingComponent implements OnInit {

  constructor() { }
  building:Building=new Building()

  ngOnInit(): void {
  }

}

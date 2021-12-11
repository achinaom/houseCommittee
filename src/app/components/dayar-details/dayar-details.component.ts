import { Component, OnInit } from '@angular/core';
import { Dayar } from 'src/app/classes/dayar';


@Component({
  selector: 'app-dayar-details',
  templateUrl: './dayar-details.component.html',
  styleUrls: ['./dayar-details.component.css']
})
export class DayarDetailsComponent implements OnInit {

  constructor() { }
  dayar: Dayar = new Dayar()
  ngOnInit(): void {
  }

}

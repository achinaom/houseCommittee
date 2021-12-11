import { Component, OnInit } from '@angular/core';
import { DayarService } from 'src/app/services/dayar.service';

@Component({
  selector: 'app-dayar',
  templateUrl: './dayar.component.html',
  styleUrls: ['./dayar.component.css']
})
export class DayarComponent implements OnInit {

  constructor(public d:DayarService) { }

  ngOnInit(): void {
    this.d.dayar.FirstName
    this.d.dayar.LastName
  }

}

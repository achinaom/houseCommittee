import { Component, OnInit } from '@angular/core';
import { DayarService } from 'src/app/services/dayar.service';

@Component({
  selector: 'app-head-committee',
  templateUrl: './head-committee.component.html',
  styleUrls: ['./head-committee.component.css']
})
export class HeadCommitteeComponent implements OnInit {

  constructor(public d:DayarService) { }

  ngOnInit(): void {
    this.d.dayar.FirstName
    this.d.dayar.LastName
  }

}

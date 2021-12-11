import { Component, OnInit } from '@angular/core';
import { Dayar } from '../../classes/dayar';

@Component({
  selector: 'app-list-dayarim',
  templateUrl: './list-dayarim.component.html',
  styleUrls: ['./list-dayarim.component.css']
})
export class ListDayarimComponent implements OnInit {

  constructor() { }
  topics = ['חשבון חודשי','?מושכרת','אמייל','טלפון ','קומה ','דירה','שם דייר'];
  dayarList:Dayar[] = [
    new Dayar(),
    new Dayar(),
    new Dayar()
  ];
  ngOnInit(): void {
  }

}

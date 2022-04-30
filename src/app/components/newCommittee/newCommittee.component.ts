import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuildingService } from 'src/app/services/building.service';
import { Dayar } from '../../classes/dayar';
import { DayarService } from '../../services/dayar.service';

@Component({
  selector: 'app-newCommittee',
  templateUrl: './newCommittee.component.html',
  styleUrls: ['./newCommittee.component.css']
})
export class NewCommitteeComponent implements OnInit {

  constructor(public dayarSer:DayarService,public buildingSer: BuildingService, public r:Router) {}
  dayar:Dayar=new Dayar()
  verifyCode1:string;
  //dayar.PsWord:string;
  ngOnInit(): void {
  }
begain(){//דרוש בדיקה
debugger
  if(this.dayar.FirstName == null || this.dayar.LastName == null || this.dayar.MailAddress == null ||this.dayar.Phone == null ||
    this.dayar.PsWord == null)
    alert("נא למלא את כל הפרטים");
  else
    if(this.dayar.PsWord != this.verifyCode1)
      alert("ווידוא סיסמא אינו תואם לסיסמא");
  else
  { 
  debugger
  this.dayar.IsHouseCommittee=true
  this.dayarSer.addDayar(this.dayar).subscribe(
    data=>{
      debugger
        if(data===null)
        alert("בעייה בכניסה למערכת");
       else
          if(data.DayarId==-1)//?
          alert("מייל זה מופיע כבר במערכת");
       else
         { 
          alert("דייר זה הוסף בהצלחה");
          this.dayarSer.dayar=data
        
           this.r.navigate(['/headCommittee']);
    } 
      
       },
    err=>{alert(err)}
  )}

//בדיקה שכל התיבות טקסט מלאות
//שהמייל לא נמצא במערכת וגם שהוא תקין
// ושהסיסמא והווידוא סיסמא תואמים
  }
}

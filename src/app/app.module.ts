import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCommitteeComponent } from './components/newCommittee/newCommittee.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { HeadCommitteeComponent } from './components/head-committee/head-committee.component';
import { CreatingBuildingComponent } from './components/creating-building/creating-building.component';
import { DayarComponent } from './components/dayar/dayar.component';
import { DayarDetailsComponent } from './components/dayar-details/dayar-details.component';
import { HomeCommitteeComponent } from './components/home-committee/home-committee.component';
import { ListDayarimComponent } from './components/list-dayarim/list-dayarim.component';
import { DiscourseDayarimComponent } from './components/discourse-dayarim/discourse-dayarim.component';
import { DeshbordComponent } from './components/deshbord/deshbord.component';
import { SurveysComponent } from './components/surveys/surveys.component';
import { CommitteePaymentsComponent } from './components/committee-payments/committee-payments.component';
import { SpecialPaymentsComponent } from './components/special-payments/special-payments.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { BankTransfersComponent } from './components/bank-transfers/bank-transfers.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { FaultsComponent } from './components/faults/faults.component';
import { MessagesComponent } from './components/messages/messages.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { ReceiptsComponent } from './components/receipts/receipts.component';
import { BankAccountComponent } from './components/bank-account/bank-account.component';


@NgModule({
  declarations: [
    AppComponent,
    NewCommitteeComponent,
    HomeComponent,
    HeadCommitteeComponent,
    CreatingBuildingComponent,
    DayarComponent,
    DayarDetailsComponent,
    HomeCommitteeComponent,
    ListDayarimComponent,
    DiscourseDayarimComponent,
    DeshbordComponent,
    SurveysComponent,
    CommitteePaymentsComponent,
    SpecialPaymentsComponent,
    ExpensesComponent,
    SuppliersComponent,
    BankTransfersComponent,
    DocumentsComponent,
    FaultsComponent,
    MessagesComponent,
    PaymentsComponent,
    ReceiptsComponent,
    BankAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule,
   HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteePaymentsComponent } from './committee-payments.component';

describe('CommitteePaymentsComponent', () => {
  let component: CommitteePaymentsComponent;
  let fixture: ComponentFixture<CommitteePaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitteePaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteePaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

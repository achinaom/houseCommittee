import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialPaymentsComponent } from './special-payments.component';

describe('SpecialPaymentsComponent', () => {
  let component: SpecialPaymentsComponent;
  let fixture: ComponentFixture<SpecialPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

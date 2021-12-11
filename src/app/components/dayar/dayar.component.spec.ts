import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayarComponent } from './dayar.component';

describe('DayarComponent', () => {
  let component: DayarComponent;
  let fixture: ComponentFixture<DayarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

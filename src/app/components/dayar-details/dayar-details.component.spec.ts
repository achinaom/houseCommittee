import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayarDetailsComponent } from './dayar-details.component';

describe('DayarDetailsComponent', () => {
  let component: DayarDetailsComponent;
  let fixture: ComponentFixture<DayarDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayarDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

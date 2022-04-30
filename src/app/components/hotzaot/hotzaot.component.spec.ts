import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotzaotComponent } from './hotzaot.component';

describe('HotzaotComponent', () => {
  let component: HotzaotComponent;
  let fixture: ComponentFixture<HotzaotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotzaotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotzaotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

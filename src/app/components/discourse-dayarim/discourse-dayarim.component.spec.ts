import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscourseDayarimComponent } from './discourse-dayarim.component';

describe('DiscourseDayarimComponent', () => {
  let component: DiscourseDayarimComponent;
  let fixture: ComponentFixture<DiscourseDayarimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscourseDayarimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscourseDayarimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

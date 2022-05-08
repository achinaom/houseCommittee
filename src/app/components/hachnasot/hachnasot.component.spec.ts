import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HachnasotComponent } from './hachnasot.component';

describe('HachnasotComponent', () => {
  let component: HachnasotComponent;
  let fixture: ComponentFixture<HachnasotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HachnasotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HachnasotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

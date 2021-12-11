import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDayarimComponent } from './list-dayarim.component';

describe('ListDayarimComponent', () => {
  let component: ListDayarimComponent;
  let fixture: ComponentFixture<ListDayarimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDayarimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDayarimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

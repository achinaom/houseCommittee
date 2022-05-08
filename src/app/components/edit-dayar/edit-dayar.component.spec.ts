import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDayarComponent } from './edit-dayar.component';

describe('EditDayarComponent', () => {
  let component: EditDayarComponent;
  let fixture: ComponentFixture<EditDayarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDayarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDayarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

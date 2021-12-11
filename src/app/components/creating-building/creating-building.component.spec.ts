import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingBuildingComponent } from './creating-building.component';

describe('CreatingBuildingComponent', () => {
  let component: CreatingBuildingComponent;
  let fixture: ComponentFixture<CreatingBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatingBuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

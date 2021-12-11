import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadCommitteeComponent } from './head-committee.component';

describe('HeadCommitteeComponent', () => {
  let component: HeadCommitteeComponent;
  let fixture: ComponentFixture<HeadCommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadCommitteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingSurveyComponent } from './creating-survey.component';

describe('CreatingSurveyComponent', () => {
  let component: CreatingSurveyComponent;
  let fixture: ComponentFixture<CreatingSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatingSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

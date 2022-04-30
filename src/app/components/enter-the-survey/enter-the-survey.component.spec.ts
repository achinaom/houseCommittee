import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterTheSurveyComponent } from './enter-the-survey.component';

describe('EnterTheSurveyComponent', () => {
  let component: EnterTheSurveyComponent;
  let fixture: ComponentFixture<EnterTheSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterTheSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterTheSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeManagementFeedbackComponent } from './time-management-feedback.component';

describe('TimeManagementFeedbackComponent', () => {
  let component: TimeManagementFeedbackComponent;
  let fixture: ComponentFixture<TimeManagementFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeManagementFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeManagementFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

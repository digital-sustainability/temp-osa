import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeManagementPlannerComponent } from './time-management-planner.component';

describe('TimeManagementPlannerComponent', () => {
  let component: TimeManagementPlannerComponent;
  let fixture: ComponentFixture<TimeManagementPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeManagementPlannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeManagementPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

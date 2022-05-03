import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpathyComponent } from './empathy.component';

describe('EmpathyComponent', () => {
  let component: EmpathyComponent;
  let fixture: ComponentFixture<EmpathyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpathyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpathyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

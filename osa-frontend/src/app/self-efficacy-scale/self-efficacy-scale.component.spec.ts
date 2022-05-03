import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfEfficacyScaleComponent } from './self-efficacy-scale.component';

describe('SelfEfficacyScaleComponent', () => {
  let component: SelfEfficacyScaleComponent;
  let fixture: ComponentFixture<SelfEfficacyScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfEfficacyScaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfEfficacyScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

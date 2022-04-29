import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolTypeComponent } from './school-type.component';

describe('SchoolTypeComponent', () => {
  let component: SchoolTypeComponent;
  let fixture: ComponentFixture<SchoolTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

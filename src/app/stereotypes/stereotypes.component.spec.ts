import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StereotypesComponent } from './stereotypes.component';

describe('StereotypesComponent', () => {
  let component: StereotypesComponent;
  let fixture: ComponentFixture<StereotypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StereotypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StereotypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

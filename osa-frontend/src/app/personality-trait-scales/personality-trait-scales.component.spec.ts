import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalityTraitScalesComponent } from './personality-trait-scales.component';

describe('PersonalityTraitScalesComponent', () => {
  let component: PersonalityTraitScalesComponent;
  let fixture: ComponentFixture<PersonalityTraitScalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalityTraitScalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalityTraitScalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

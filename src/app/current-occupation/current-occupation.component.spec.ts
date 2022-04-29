import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentOccupationComponent } from './current-occupation.component';

describe('CurrentOccupationComponent', () => {
  let component: CurrentOccupationComponent;
  let fixture: ComponentFixture<CurrentOccupationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentOccupationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentOccupationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

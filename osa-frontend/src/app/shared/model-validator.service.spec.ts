import { TestBed } from '@angular/core/testing';

import { ModelValidatorService } from './model-validator.service';

describe('ModelValidatorService', () => {
  let service: ModelValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

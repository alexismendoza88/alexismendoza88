import { TestBed } from '@angular/core/testing';

import { AutoprovinceService } from './autoprovince.service';

describe('AutoprovinceService', () => {
  let service: AutoprovinceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoprovinceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

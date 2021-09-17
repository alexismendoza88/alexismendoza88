import { TestBed } from '@angular/core/testing';

import { AutostateService } from './autostate.service';

describe('AutostateService', () => {
  let service: AutostateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutostateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

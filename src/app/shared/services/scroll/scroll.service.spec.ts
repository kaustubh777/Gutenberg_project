import { TestBed } from '@angular/core/testing';

import { SrcollService } from './scroll.service';

describe('SrcollService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SrcollService = TestBed.get(SrcollService);
    expect(service).toBeTruthy();
  });
});

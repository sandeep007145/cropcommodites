import { TestBed } from '@angular/core/testing';

import { CropcommodityService } from './cropcommodity.service';

describe('CropcommodityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CropcommodityService = TestBed.get(CropcommodityService);
    expect(service).toBeTruthy();
  });
});

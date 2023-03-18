import { TestBed } from '@angular/core/testing';

import { ProductchracteristicsService } from './productchracteristics.service';

describe('ProductchracteristicsService', () => {
  let service: ProductchracteristicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductchracteristicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

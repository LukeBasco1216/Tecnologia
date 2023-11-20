import { TestBed } from '@angular/core/testing';

import { WoTservicesService } from './wotservices.service';

describe('WoTservicesService', () => {
  let service: WoTservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WoTservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

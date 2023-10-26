import { TestBed } from '@angular/core/testing';

import { ElencotypepokemonsService } from './elencotypepokemons.service';

describe('ElencotypepokemonsService', () => {
  let service: ElencotypepokemonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElencotypepokemonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PokemoninsiderinfoDATAService } from './pokemoninsiderinfo-data.service';

describe('PokemoninsiderinfoDATAService', () => {
  let service: PokemoninsiderinfoDATAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemoninsiderinfoDATAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemoninsiderinfoComponent } from './pokemoninsiderinfo.component';

describe('PokemoninsiderinfoComponent', () => {
  let component: PokemoninsiderinfoComponent;
  let fixture: ComponentFixture<PokemoninsiderinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemoninsiderinfoComponent]
    });
    fixture = TestBed.createComponent(PokemoninsiderinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

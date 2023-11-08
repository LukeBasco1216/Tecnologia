import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from 'src/model/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemoninsiderinfoDATAService {

  constructor(private http: HttpClient) { }

  getPokemons(id: string) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return this.http.get<Pokemon>(url);
  }
}

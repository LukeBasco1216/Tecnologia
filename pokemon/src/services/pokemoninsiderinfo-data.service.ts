import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemoninsiderinfoDATAService {

  constructor(private http: HttpClient) { }

  getPokemons(id: string) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return this.http.get(url);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemons(id: string) {
    const url = `https://pokeapi.co/api/v2/type/${id}`;
    return this.http.get(url);
  }
}

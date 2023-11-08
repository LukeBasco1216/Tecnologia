import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pokemons } from 'src/model/pokemons.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemons(id: string) {
    const url = `https://pokeapi.co/api/v2/type/${id}`;
    return this.http.get<pokemons>(url);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ElencotypepokemonsService {

  constructor(private http: HttpClient) { }
  getdata() {
    return this.http.get('https://pokeapi.co/api/v2/type')
  }
}

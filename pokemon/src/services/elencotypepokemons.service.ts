import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dati } from 'src/model/newDataListatype.model';

@Injectable({
  providedIn: 'root'
})
export class ElencotypepokemonsService {

  constructor(private http: HttpClient) { }
  getdata() {
    return this.http.get<dati>('https://pokeapi.co/api/v2/type')
  }
}

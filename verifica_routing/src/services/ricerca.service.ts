import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RicercaService {

  constructor(private http: HttpClient) { }

  searchBirra(query: string) {
    const url = ` https://api.punkapi.com/v2/beers/${query}`;
    const headers = new HttpHeaders({
    });

    let obsbirre = this.http.get(url, { headers });
    return obsbirre;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}

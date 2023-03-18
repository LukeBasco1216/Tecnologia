import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RicercaService {
  static searchFood(query: string): import("rxjs").Observable<Object> {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  searchFood(query: string) {
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&page_size=2&json=true`;
    const headers = new HttpHeaders({
    });

    let obsFoods = this.http.get(url, { headers });
    return obsFoods;
 //Ritorno un observable ai componenti che richiedono il servizio
  }

}

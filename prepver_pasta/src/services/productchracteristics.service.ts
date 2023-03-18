import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductchracteristicsService {

  constructor(private http: HttpClient) { }

  searchFoodCharacteristics(id: string) {
    const url = `https://world.openfoodfacts.org/api/v2/product/${id}`;
    const headers = new HttpHeaders({
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}

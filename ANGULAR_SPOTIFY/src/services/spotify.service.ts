import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAtZ0uviGIDcN_4aABinx1EIFrwJqaVR1n6w6TcB61RP2E7BJfKlw6_619Bdz6VbozUVLfnO_84-HN-3Vl0y0XfZJeuEb4CZ7YgWNpnRVHBERhm3wn3MJsxRBQqkL2RLwCj6oNunrBqrt4xFXiYeAOKnGgFsqgHHhfpV8Kh78ItkkcAFoMF0RbyGd4-tSOXjaMZ'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }

}


//   GET https://api.spotify.com/v1/search

// curl -X "GET" "https://api.spotify.com/v1/search?q=lateralus&type=track" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQBGBxPywVV7FWj8MVfCiCJs3wAteE7PiXVQRY-NG891ihCNhz2BA4NM2Hwl0rJ-Cqei8g0FE11U7cr2L4iw8cB-nMAo-DWh_EQtQedu0Nrz3ve29sx8qQtxQiUfOPkinpML5v9msLmX1OKfZxUSyrtaXua-MKJcdl2UtWJxuJLln34GILEmP_G6mLuSpsGkY-28"
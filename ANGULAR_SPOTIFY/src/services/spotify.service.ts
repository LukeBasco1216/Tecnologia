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
        'Bearer BQAQABbSAzowHe1LxcVNL97ScXqg0TXTVsyLQ_Sz3Y6KEjDaD_QI5FKvZSy-zbZa5SU11SimdahAuAV4NFBmuoUG56QqwHmC-9saahcWkyolsXDayMsPenuFWfKJ_FaeDG-NrFjwallyfI8X1m9XMfCzzn12ChR_ted1CMC6CDd4PxW0DqAQFBwefANRcHwCZzwa'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }

}


//   GET https://api.spotify.com/v1/search

// curl -X "GET" "https://api.spotify.com/v1/search?q=lateralus&type=track" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQBGBxPywVV7FWj8MVfCiCJs3wAteE7PiXVQRY-NG891ihCNhz2BA4NM2Hwl0rJ-Cqei8g0FE11U7cr2L4iw8cB-nMAo-DWh_EQtQedu0Nrz3ve29sx8qQtxQiUfOPkinpML5v9msLmX1OKfZxUSyrtaXua-MKJcdl2UtWJxuJLln34GILEmP_G6mLuSpsGkY-28"
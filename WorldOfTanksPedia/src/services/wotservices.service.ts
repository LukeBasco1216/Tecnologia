import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WoTservicesService {

  constructor(private http: HttpClient) { }

  getTankList() {
    const url = `https://api.worldoftanks.eu/wot/encyclopedia/vehicles/?application_id=${environment.apiKey}`;
    // const headers = new HttpHeaders({
    //   Authorization:
    //     environment.oauthToken
    // });
    return this.http.get(url);
  }
  
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  getAgents() {
    const url = `https://valorant-api.com/v1/agents`;
    return this.http.get(url);
  }

  getAgentInfo(id: string) {
    const url = `https://valorant-api.com/v1/agents/${id}`;
    return this.http.get(url);
  }
}

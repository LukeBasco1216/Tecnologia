import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RicercaService } from 'src/services/ricerca.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query: string | undefined;
  obsFood: Observable<Object> | undefined;
  results: any;
  
  constructor (public ricerca: RicercaService) {}

  submit(newquery: HTMLInputElement): void {

    if (!newquery.value) {
      return;
    }
    this.query = newquery.value;
    this.obsFood = this.ricerca.searchFood(this.query);
    this.obsFood.subscribe((data) => { this.results = data; console.log(this.results) });

    // (data) => { this.results = data; console.log(this.results) } ----> per ottenere nel console i dati
  }

}

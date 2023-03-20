import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RicercaService } from 'src/services/ricerca.service';

@Component({
  selector: 'app-search-birre',
  templateUrl: './search-birre.component.html',
  styleUrls: ['./search-birre.component.css']
})
export class SearchBirreComponent {
  query: string | undefined;
  obsbirra: Observable<Object> | undefined;
  results: any;
  
  constructor (public ricerca: RicercaService) {}

  submit(newquery: HTMLInputElement): void {

    if (!newquery.value) {
      return;
    }
    this.query = newquery.value;
    this.obsbirra = this.ricerca.searchBirra(this.query);
    this.obsbirra.subscribe((data) => { this.results = data; console.log(this.results) });

    // (data) => { this.results = data; console.log(this.results) } ----> per ottenere nel console i dati
  }
}

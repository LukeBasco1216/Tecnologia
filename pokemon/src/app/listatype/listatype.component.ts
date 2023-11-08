import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElencotypepokemonsService } from 'src/services/elencotypepokemons.service';
import { Datatype } from 'src/model/datatype.model';
import { dati } from 'src/model/newDataListatype.model';

@Component({
  selector: 'app-listatype',
  templateUrl: './listatype.component.html',
  styleUrls: ['./listatype.component.css']
})
export class ListatypeComponent implements OnInit{
  dati : dati;

  constructor(private ElencotypepokemonsService: ElencotypepokemonsService, private http: HttpClient, private router: Router){}

  mydata: any;
  ngOnInit(): void {
    this.ElencotypepokemonsService.getdata().subscribe((data: dati) => {
      this.dati = data;
    });
  }

  logUrl(event: Event, url: string) {
    event.preventDefault(); // Prevent the default behavior of navigating to the URL
    console.log(url); // Log the URL to the console
  }
}

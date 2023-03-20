import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { RicercaService } from 'src/services/ricerca.service';
@Component({
  selector: 'app-item-birre',
  templateUrl: './item-birre.component.html',
  styleUrls: ['./item-birre.component.css']
})
export class ItemBirreComponent implements OnInit{

  routeObs: Observable<ParamMap> | undefined; 
  birra: any ;
    constructor(    
      private route: ActivatedRoute, 
      private router: Router, 
      private location: Location,
      private servizio: RicercaService
      ){}

      ngOnInit(): void {
        //Ottengo l'observable che notifica le informazioni sulla route attiva
        this.routeObs = this.route.paramMap;
        this.routeObs.subscribe(this.getRouterParam);
      }

      searchBirraObs : any;
      //Ogni volta che viene invocata la route tracks/:id, l'observable richiama questo metodo
      getRouterParam = (params: ParamMap) =>
      {
        let birraId = params.get('id'); //Ottengo l'id dalla ParamMap
        console.log (birraId); //Stampo su console  
        // this.service.getTrack(trackId); 
        this.searchBirraObs = this.servizio.searchBirra(birraId) ;
        // codice necessaria
        this.searchBirraObs.subscribe((data: any)=>{this.birra = data; console.log(this.birra)});
        // console.log(this.food) per sapere che data ho nel console
      }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductchracteristicsService } from 'src/services/productchracteristics.service';
// importare location se no ti restituisce un errore di injection nel console
import { Location } from '@angular/common';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{
  routeObs: Observable<ParamMap> | undefined; 
  food: any ;
    constructor(    
      private route: ActivatedRoute, 
      private router: Router, 
      private location: Location,
      private servizio: ProductchracteristicsService
      ){}

      ngOnInit(): void {
        //Ottengo l'observable che notifica le informazioni sulla route attiva
        this.routeObs = this.route.paramMap;
        this.routeObs.subscribe(this.getRouterParam);
      }

      searchFoodCharacteristicsObs : any;
      //Ogni volta che viene invocata la route tracks/:id, l'observable richiama questo metodo
      getRouterParam = (params: ParamMap) =>
      {
        let FoodId = params.get('id'); //Ottengo l'id dalla ParamMap
        console.log (FoodId); //Stampo su console  
        // this.service.getTrack(trackId); 
        this.searchFoodCharacteristicsObs = this.servizio.searchFoodCharacteristics(FoodId) ;
        // codice non necessaria?
        this.searchFoodCharacteristicsObs.subscribe((data: any)=>{this.food = data; console.log(this.food)});
        // console.log(this.food) per sapere che data ho nel console
      }
}

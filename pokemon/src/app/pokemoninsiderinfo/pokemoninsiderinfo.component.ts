import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemoninsiderinfoDATAService } from 'src/services/pokemoninsiderinfo-data.service';

@Component({
  selector: 'app-pokemoninsiderinfo',
  templateUrl: './pokemoninsiderinfo.component.html',
  styleUrls: ['./pokemoninsiderinfo.component.css']
})
export class PokemoninsiderinfoComponent implements OnInit{

  routeObs: Observable<ParamMap> | undefined; 
  pokemoninfo : any;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private service: PokemoninsiderinfoDATAService,
    ) { }


    ngOnInit(): void {
      //Ottengo l'observable che notifica le informazioni sulla route attiva
      this.routeObs = this.route.paramMap;
      this.routeObs.subscribe(this.getRouterParam);
    }

    pokeinfoServiceObs : any;

  getRouterParam = (params: ParamMap) =>
  {
    let pokeId = params.get('id'); //Ottengo l'id dalla ParamMap
    console.log (pokeId); //Stampo su console  
    // this.service.getTrack(trackId); 
    this.pokeinfoServiceObs = this.service.getPokemons(pokeId) ;
    // codice non necessaria?
    this.pokeinfoServiceObs.subscribe((data: any)=>this.pokemoninfo = data)
  }
}

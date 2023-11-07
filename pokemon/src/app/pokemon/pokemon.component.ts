import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonService } from 'src/services/pokemons.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{
  routeObs: Observable<ParamMap> | undefined; 
  pokemons : any;
  
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private service: PokemonService,
    ) { }


  ngOnInit(): void {
    //Ottengo l'observable che notifica le informazioni sulla route attiva
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
    console.log(this.pokemons)
  }

  pokeServiceObs : any;

  getRouterParam = (params: ParamMap) =>
  {
    let pokeId = params.get('id'); //Ottengo l'id dalla ParamMap
    console.log (pokeId); //Stampo su console  
    // this.service.getTrack(trackId); 
    this.pokeServiceObs = this.service.getPokemons(pokeId) ;
    // codice non necessaria?
    this.pokeServiceObs.subscribe((data: any)=>this.pokemons = data)
  }
}

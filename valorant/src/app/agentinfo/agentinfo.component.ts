import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Agentdata } from 'src/models/AgentInfo';
import { ServicesService } from 'src/services/services.service';
import { Location } from '@angular/common'; //IMPORTANTE per il pulsante back

@Component({
  selector: 'app-agentinfo',
  templateUrl: './agentinfo.component.html',
  styleUrls: ['./agentinfo.component.css']
})
export class AgentinfoComponent implements OnInit{

  routeObs: Observable<ParamMap> | undefined; 
  AgentInfo : Agentdata ;


  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private service: ServicesService,
    private location: Location
    ) { }


    ngOnInit(): void {
      //Ottengo l'observable che notifica le informazioni sulla route attiva
      this.routeObs = this.route.paramMap;
      this.routeObs.subscribe(this.getRouterParam);
    }


    AgentInfoServiceObs : any;

    getRouterParam = (params: ParamMap) =>
    {
      let AgentUuid = params.get('Uuid'); //Ottengo l'id dalla ParamMap
      console.log (AgentUuid); //Stampo su console  
      // this.service.getTrack(trackId); 
      this.AgentInfoServiceObs = this.service.getAgentInfo(AgentUuid) ;
      // codice non necessaria?
      this.AgentInfoServiceObs.subscribe((data: Agentdata)=>this.AgentInfo = data );
    }

    back() : void
    {
      this.location.back();
    }

}

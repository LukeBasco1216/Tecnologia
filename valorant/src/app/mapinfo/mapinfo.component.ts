import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServicesService } from 'src/services/services.service';
import { Location } from '@angular/common'; //importante per il pulsante back
import { Mapdata } from 'src/models/maps';
import { mapinfo } from 'src/models/mapinfo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mapinfo',
  templateUrl: './mapinfo.component.html',
  styleUrls: ['./mapinfo.component.css']
})
export class MapinfoComponent {

  routeObs: Observable<ParamMap> | undefined;
  MapInfo : mapinfo;

  constructor(private service: ServicesService, 
    private http: HttpClient, 
    private router: Router, 
    private location: Location,
    private route: ActivatedRoute){}

  
    ngOnInit(): void {
      //Ottengo l'observable che notifica le informazioni sulla route attiva
      this.routeObs = this.route.paramMap;
      this.routeObs.subscribe(this.getRouterParam);
    }


    MapInfoServiceObs : any;

    getRouterParam = (params: ParamMap) =>
    {
      let MapUuid = params.get('Uuid'); //Ottengo l'id dalla ParamMap
      console.log (MapUuid); //Stampo su console  
      // this.service.getTrack(trackId); 
      this.MapInfoServiceObs = this.service.getMapInfo(MapUuid) ;
      // codice non necessaria?
      this.MapInfoServiceObs.subscribe((data: mapinfo)=>this.MapInfo = data );
    }

  back() : void
  {
    this.location.back();
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/services/services.service';
import { Location } from '@angular/common'; // importante per il pulsante back
import { Mapdata } from 'src/models/maps';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit{

  Maps : Mapdata;

  constructor(private Services: ServicesService, 
    private http: HttpClient, 
    private router: Router, 
    private location: Location){}

  
  ngOnInit(): void {
    this.Services.getMaps().subscribe((data: Mapdata) => {
      this.Maps = data;
    });
  }

  back() : void
  {
    this.location.back();
  }
  
}

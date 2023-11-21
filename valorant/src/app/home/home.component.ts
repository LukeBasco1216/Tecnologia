import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  Endpoints = [{'endpoint':'Agents','RL':'/agents', 'img':'assets/img/valAgents.jpeg'}, 
  {'endpoint':'maps','RL':'/maps', 'img':'assets/img/mapsval.png'},
  ];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}

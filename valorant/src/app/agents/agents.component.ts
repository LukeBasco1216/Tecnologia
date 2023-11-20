import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agents } from 'src/models/agents';
import { ServicesService } from 'src/services/services.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit{
  dati : Agents;

  constructor(private Services: ServicesService, private http: HttpClient, private router: Router){}

  mydata: any;
  ngOnInit(): void {
    this.Services.getAgents().subscribe((data: Agents) => {
      this.dati = data;
    });
  }
}

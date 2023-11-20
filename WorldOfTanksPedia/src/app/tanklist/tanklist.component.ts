import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WoTservicesService } from 'src/services/wotservices.service';
import { TankList } from 'src/models/tanklist';

@Component({
  selector: 'app-tanklist',
  templateUrl: './tanklist.component.html',
  styleUrls: ['./tanklist.component.css']
})
export class TanklistComponent implements OnInit{
  dati : TankList;

  constructor(private WoTservicesService: WoTservicesService, private http: HttpClient, private router: Router){}

  mydata: any;
  ngOnInit(): void {
    this.WoTservicesService.getTankList().subscribe((data: TankList) => {
      this.dati = data;
    });
  }
}

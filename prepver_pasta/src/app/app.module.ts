import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { CaratteristicheComponent } from './caratteristiche/caratteristiche.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductchracteristicsService } from 'src/services/productchracteristics.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CaratteristicheComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    // importare questo se no non riesce e prendere l'injection nel service HttpClientModule
    HttpClientModule,
    NgbModule 
  ],
  providers: [ProductchracteristicsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

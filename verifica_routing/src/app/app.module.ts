import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBirreComponent } from './search-birre/search-birre.component';
import { ItemBirreComponent } from './item-birre/item-birre.component';
import { RicercaService } from 'src/services/ricerca.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchBirreComponent,
    ItemBirreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RicercaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

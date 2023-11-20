import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgentsComponent } from './agents/agents.component';
import { HomeComponent } from './home/home.component';
import { AgentinfoComponent } from './agentinfo/agentinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    AgentsComponent,
    HomeComponent,
    AgentinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentsComponent } from './agents/agents.component';
import { HomeComponent } from './home/home.component';
import { AgentinfoComponent } from './agentinfo/agentinfo.component';
import { MapsComponent } from './maps/maps.component';
import { MapinfoComponent } from './mapinfo/mapinfo.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'agents', component: AgentsComponent },
  { path: 'agentinfo/:Uuid', component: AgentinfoComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'mapinfo/:Uuid', component: MapinfoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

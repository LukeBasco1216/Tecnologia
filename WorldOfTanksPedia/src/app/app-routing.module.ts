import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TanklistComponent } from './tanklist/tanklist.component';

const routes: Routes = [
  { path: '', redirectTo: 'tanklist', pathMatch: 'full' },
  { path: 'tanklist', component: TanklistComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

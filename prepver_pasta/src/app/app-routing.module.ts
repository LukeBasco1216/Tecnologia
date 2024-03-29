import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaratteristicheComponent } from './caratteristiche/caratteristiche.component';
import { ItemComponent } from './item/item.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '',   redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'caratteristiche/:id', component: CaratteristicheComponent },
  { path: 'item/:id', component: ItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

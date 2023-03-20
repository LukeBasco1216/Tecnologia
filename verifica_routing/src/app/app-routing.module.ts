import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemBirreComponent } from './item-birre/item-birre.component';
import { SearchBirreComponent } from './search-birre/search-birre.component';

const routes: Routes = [
  { path: '',   redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchBirreComponent },
  { path: 'item/:id', component: ItemBirreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

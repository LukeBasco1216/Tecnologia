import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListatypeComponent } from './listatype/listatype.component';
import { PokemonComponent } from './pokemon/pokemon.component';
const routes: Routes = [
  { path: '', redirectTo: 'listatype', pathMatch: 'full' },
  { path: 'listatype', component: ListatypeComponent },
  { path: 'pokemon/:id', component: PokemonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

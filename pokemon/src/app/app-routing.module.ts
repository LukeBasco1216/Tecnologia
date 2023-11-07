import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListatypeComponent } from './listatype/listatype.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemoninsiderinfoComponent } from './pokemoninsiderinfo/pokemoninsiderinfo.component';

const routes: Routes = [
  { path: '', redirectTo: 'listatype', pathMatch: 'full' },
  { path: 'listatype', component: ListatypeComponent },
  { path: 'pokemon/:id', component: PokemonComponent },
  { path: 'pokemoninsiderinfo/:id', component: PokemoninsiderinfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

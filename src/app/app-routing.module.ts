import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesListComponent } from './Components/games-list/games-list.component';
import { GameInfoComponent } from './Components/game-info/game-info.component';

const routes: Routes = [
  {path:'',
  component:GamesListComponent
},
  {path:'game/:id',
  component:GameInfoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

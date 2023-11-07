import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { InformationComponent } from './Components/information/information.component';
import { GamesListComponent } from './Components/games-list/games-list.component';
import { GameBoxComponent } from './Components/game-box/game-box.component';
import { GameInfoComponent } from './Components/game-info/game-info.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InformationComponent,
    GamesListComponent,
    GameBoxComponent,
    GameInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

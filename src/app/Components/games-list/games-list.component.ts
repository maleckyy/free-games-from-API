import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { gamesData } from 'src/gamesData';
import { Params } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesListComponent implements OnInit {
  allGamesData = gamesData;

  fetchURL: string = 'https://www.freetogame.com/api/games?';

  allGenres: Array<string> = [
    'arpg',
    'shooter',
    'mmorpg',
    'strategy',
    'fighting',
    'action rpg',
    'battle royale',
    'moba',
    'sports',
    'racing',
    'card game',
  ];
  genreType: string = '';

  constructor(private router: ActivatedRoute, public route: Router) {}

  ngOnInit() {
    // console.log(this.allGamesData)
    this.router.queryParams.subscribe((data) => {
      this.genreType = data['genre'];
    });
    if (this.genreType) {
      this.allGamesData = gamesData.filter(
        (item: any) => item.genre.toLowerCase() === this.genreType
      );
    } else {
      this.allGamesData = gamesData;
    }
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { gamesData } from 'src/gamesData';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent {

  allData:any = gamesData;

  selectedGame:any;

  selectedId!:number;

  similarGames:any;

  constructor( private router:ActivatedRoute ){
    router.params.subscribe((params)=>{
      if(params['id']){
        this.selectedId = Number(params['id'])
        this.SetGame(Number(params['id']))
      }
    })
  }
/* Randomize array in-place using Durstenfeld shuffle algorithm */
  shuffleArray(array:Array<object>) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
}

  SetGame(id:number){
    const game = this.allData.filter((game:any)=>game.id === id)
    this.selectedGame = game[0]

    const byType = this.allData.filter((item:any)=> item.genre === this.selectedGame.genre && item.title !== this.selectedGame.title)
    this.shuffleArray(byType)
    this.similarGames = byType
  }
  
  ngOnInit(){
  }
}

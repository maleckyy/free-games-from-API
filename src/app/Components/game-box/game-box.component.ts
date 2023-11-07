import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-box',
  templateUrl: './game-box.component.html',
  styleUrls: ['./game-box.component.scss']
})
export class GameBoxComponent {

  constructor( private router:ActivatedRoute){}

  @Input() game:any = {}

  ngOnInit(){
  }

}

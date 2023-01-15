import { Component, OnInit, Input } from '@angular/core';
import { TopPicks } from 'src/app/models/top-picks.model';

@Component({
  selector: 'app-top-picks',
  templateUrl: './top-picks.component.html',
  styleUrls: ['./top-picks.component.css']
})
export class TopPicksComponent implements OnInit {

  constructor(){}

  @Input() topPick!: TopPicks;

  ngOnInit(){
  }




}

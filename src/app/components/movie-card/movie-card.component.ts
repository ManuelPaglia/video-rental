import { SearchedFilm } from 'src/model/searchedFilm';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input()
  movie!: SearchedFilm;
  url: string = 'https://pad.mymovies.it/filmclub/2014/01/001/locandina.jpg';
  constructor() {}

  ngOnInit() {}
}

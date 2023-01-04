import { Component, Input, OnInit } from '@angular/core';
import { SearchedFilm } from 'src/model/searchedFilm';

@Component({
  selector: 'app-filter-movie-card',
  templateUrl: './filter-movie-card.component.html',
  styleUrls: ['./filter-movie-card.component.scss'],
})
export class FilterMovieCardComponent implements OnInit {
  @Input()
  movie!: SearchedFilm;
  constructor() { }

  ngOnInit() {}

}

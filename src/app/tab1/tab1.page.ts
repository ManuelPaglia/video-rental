import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SearchedFilm } from 'src/model/searchedFilm';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  title: String = 'Home';
  searchedValue: String = '';
  movies: SearchedFilm[] = [];
  constructor(private http: HttpClient) {}

  onSearch() {
    let film = this.http.get(
      `http://www.omdbapi.com/?s=${this.searchedValue}&apikey=34b98368`
    );
    film.subscribe((films: any) => {
      this.movies = films.Search;
    });
  }
}

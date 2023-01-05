import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SearchedFilm } from 'src/model/searchedFilm';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  title: String = 'Home';
  searchedValue: String = '';
  movies: SearchedFilm[] = [];
  option = {
    slidesPerView: 1.2,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
  };
  constructor(private http: HttpClient) {}
  ngOnInit() {
    let film = this.http.get(
      `https://www.omdbapi.com/?s=the+witcher&apikey=34b98368`
    );
    film.subscribe((films: any) => {
      this.movies = films.Search;
    });
  }
  onSearch() {
    if (this.searchedValue == '') {
      this.ngOnInit();
    } else {
      let film = this.http.get(
        `https://www.omdbapi.com/?s=${this.searchedValue}&apikey=34b98368`
      );
      film.subscribe((films: any) => {
        this.movies = films.Search;
      });
    }
  }
}

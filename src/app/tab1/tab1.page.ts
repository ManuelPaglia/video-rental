import { SearchService } from 'src/service/search.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SearchedFilm } from 'src/model/searchedFilm';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  title: string = 'Home';
  searchedValue: string = '';
  movies: SearchedFilm[] = [];
  option = {
    slidesPerView: 1.2,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
  };
  constructor(private http: HttpClient, private searchService: SearchService) {}
  ngOnInit() {
    let film = this.searchService.getInitialMovie();
    film.subscribe((films: any) => {
      this.movies = films.Search;
    });
  }
  onSearch() {
    if (this.searchedValue == '') {
      this.ngOnInit();
    } else {
      let film = this.searchService.getHomeMovie(this.searchedValue);
      film.subscribe((films: any) => {
        this.movies = films.Search;
      });
    }
  }
}

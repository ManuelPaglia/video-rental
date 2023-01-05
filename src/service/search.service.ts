import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchedFilm } from 'src/model/searchedFilm';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  movies: SearchedFilm[] = [];
  private theObjData: BehaviorSubject<SearchedFilm[]> = new BehaviorSubject<
    SearchedFilm[]
  >([]);

  currentObject = this.theObjData.asObservable();

  constructor(private httpClient: HttpClient) {}

  getMovies(title: string) {
    console.log('cerco');
    const movies = this.httpClient.get(
      `httpss://www.omdbapi.com/?i=tt3896198&apikey=34b98368&s=${title}`
    );
    return movies;
  }

  filterMovie(title: string, type: string, year?: string) {

    let anno: string = '';
    let tipo: string = '';
    // if (type !== 'all') {
    //   tipo = type;
    // }
    // if (typeof year !== 'undefined') {
    //   if (isNaN(+year) === false) {
    //     anno = year;
    //   }
    // }
    console.log(`${title} ${anno} ${tipo}`);
    const movies = this.httpClient.get(
      `https://www.omdbapi.com/?s=${title}&y=${type}&type=${year}&apikey=34b98368`
    );
    movies.subscribe((films: any) => {
      this.theObjData.next(films.Search);
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchedFilm } from 'src/model/searchedFilm';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private theObjData: BehaviorSubject<SearchedFilm[]> = new BehaviorSubject<
    SearchedFilm[]
  >([]);

  currentObject = this.theObjData.asObservable();

  constructor(private httpClient: HttpClient) {}

  getMovie(id: string | null) {
    console.log('cerco');
    const movie = this.httpClient.get(
      `https://www.omdbapi.com/?i=${id}&apikey=34b98368`
    );
    return movie;
  }

  filterMovie(title: string, type: string, year?: string) {
    let baseUrlSearch: string = `https://www.omdbapi.com/?s=${title}&apikey=34b98368`;
    if (type !== 'all') {
      console.log(type + 'd');
      baseUrlSearch = baseUrlSearch + `&type=${type}`;
    }
    if (typeof year !== 'undefined') {
      if (isNaN(+year) === false) {
        baseUrlSearch = baseUrlSearch + `&y=${year}`;
      }
    }
    const movies = this.httpClient.get(baseUrlSearch);
    movies.subscribe((films: any) => {
      this.theObjData.next(films.Search);
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private httpClient: HttpClient) {}

  getMovies(title: string) {
    console.log('cerco');
    const movies = this.httpClient.get(
      `http://www.omdbapi.com/?i=tt3896198&apikey=34b98368&s=${title}`
    );
    return movies;
  }
}

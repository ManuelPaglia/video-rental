import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmDetail } from 'src/model/detailFilm';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  item: any = {};
  isNan: boolean = false;
  genreArray: [] = [];
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private location: Location
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    let film = this.http.get(
      `https://www.omdbapi.com/?i=${id}&apikey=34b98368&plot=full`
    );
    film.subscribe((film: any) => {
      this.item = film;
      if (isNaN(+film.Metascore)) {
        this.isNan = !this.isNan;
      }
      this.genreArray = film.Genre.split(',');
    });
  }
  back() {
    this.location.back();
  }
}

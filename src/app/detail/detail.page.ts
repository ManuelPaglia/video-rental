import { SearchService } from 'src/service/search.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmDetail } from 'src/model/detailFilm';
import { Location } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  item: any = {};
  isNan: boolean = false;
  show: boolean = false;
  postJWT: string = '';
  errorMsh: string = '';
  genreArray: [] = [];
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private location: Location,
    private service: SearchService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    let film = this.service.getMovie(id!);
    film.subscribe((film: any) => {
      this.item = film;
      this.show = true;
      if (isNaN(+film.Metascore)) {
        this.isNan = !this.isNan;
      }
      this.genreArray = film.Genre.split(',');
    });
  }
  back() {
    this.location.back();
  }
  singIn() {
    let header = new HttpHeaders();
    header.set('Origin', '*');
    this.http
      .post<any>(
        'https://video-rental-be.onrender.com/v1/signin',
        {
          email: 'prova@gmail.com',
          password: '12345678',
        },
        { headers: header }
      )
      .subscribe((data) => {
        alert(data);
      });
  }
}

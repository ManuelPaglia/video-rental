import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchedFilm } from 'src/model/searchedFilm';
import { SearchService } from 'src/service/search.service';
import { FilterModalPage } from '../filter-modal/filter-modal.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  title: String = 'Explore';
  movies: SearchedFilm[] = [];
  //show: boolean = false;

  constructor(
    private modalController: ModalController,
    private service: SearchService
  ) {}
  ngOnInit(): void {
    this.service.currentObject.subscribe((movies) => {
      this.movies = movies;
      //this.show = true;
    });
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: FilterModalPage,

      cssClass: 'my-custom-modal-css',
    });
    await modal.present();
  }
}

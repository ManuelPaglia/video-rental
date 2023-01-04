import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchedFilm } from 'src/model/searchedFilm';
import { FilterModalPage } from '../filter-modal/filter-modal.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  title: String = 'Explore';
  movies: SearchedFilm[] = [];

  constructor(private modalController: ModalController) {}
  async presentModal() {
    const modal = await this.modalController.create({
      component: FilterModalPage,

      cssClass: 'my-custom-modal-css',
    });
    await modal.present();
  }
}

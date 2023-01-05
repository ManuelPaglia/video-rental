import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchService } from 'src/service/search.service';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.page.html',
  styleUrls: ['./filter-modal.page.scss'],
})
export class FilterModalPage implements OnInit {
  searchValue: string = '';
  yearValue: string = '';
  type: string;
  constructor(
    private modalCtrl: ModalController,
    private service: SearchService
  ) {
    this.type = 'all';
  }

  ngOnInit() {}
  close() {
    this.modalCtrl.dismiss();
  }
  done() {
    this.service.filterMovie(this.searchValue, this.type, this.yearValue);
    this.modalCtrl.dismiss();
  }
}

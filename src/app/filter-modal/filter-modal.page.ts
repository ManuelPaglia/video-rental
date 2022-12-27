import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.page.html',
  styleUrls: ['./filter-modal.page.scss'],
})
export class FilterModalPage implements OnInit {
  searchValue: string = '';
  public type: string;
  constructor(private modalCtrl: ModalController) {
    this.type = 'all';
  }

  ngOnInit() {}
  close() {
    this.modalCtrl.dismiss();
  }
}

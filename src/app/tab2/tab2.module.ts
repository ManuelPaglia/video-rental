import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { ComponentModule } from '../components/component.module';
import { FilterMovieCardComponent } from '../components/filter-movie-card/filter-movie-card.component';

@NgModule({
  declarations: [Tab2Page, FilterMovieCardComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    ComponentModule,
  ],
})
export class Tab2PageModule {}

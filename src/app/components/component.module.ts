import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAHeaderComponent } from './maheader/maheader.component';

@NgModule({
  declarations: [MAHeaderComponent],
  imports: [CommonModule],
  exports: [MAHeaderComponent],
})
export class ComponentModule {}

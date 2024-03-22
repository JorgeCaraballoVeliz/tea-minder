import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeaListComponent } from './tea-list/tea-list.component';
import { TeaDetailComponent } from './tea-detail/tea-detail.component';



@NgModule({
  declarations: [
    TeaListComponent,
    TeaDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TeaListComponent,
    TeaDetailComponent
  ]
})
export class PagesModule { }

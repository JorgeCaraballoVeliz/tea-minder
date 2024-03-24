import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeaListComponent } from './tea-list/tea-list.component';
import { TeaDetailComponent } from './tea-detail/tea-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: 'tea',
    component: TeaListComponent,
    canActivate: [authGuard]
  },
  {
    path: 'details/:id',
    component: TeaDetailComponent,
    canActivate: [authGuard]
  },
  {
    path: '**',
    redirectTo: 'tea'
  }
]


@NgModule({
  declarations: [
    TeaListComponent,
    TeaDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    TeaListComponent,
    TeaDetailComponent
  ]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { OwlModule } from 'ngx-owl-carousel';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    OwlModule,
    RouterModule.forChild(routes),
  ]
})
export class WebUiModule {
  constructor() {
  }
}

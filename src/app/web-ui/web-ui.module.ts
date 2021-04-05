import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { OwlModule } from 'ngx-owl-carousel';
import { FormComponent } from './form/form.component';
import { WidgetsModule } from '../_metronic/partials/content/widgets/widgets.module';
import { NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownMenusModule } from '../_metronic/partials/content/dropdown-menus/dropdown-menus.module';
import { UserProfileRoutingModule } from '../modules/user-profile/user-profile-routing.module';
import { InlineSVGModule } from 'ng-inline-svg';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CRUDTableModule } from '../_metronic/shared/crud-table';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'formc',
    component: FormComponent
  }
]


@NgModule({
  declarations: [HomeComponent, FormComponent],
  imports: [
    CommonModule,
    OwlModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    CRUDTableModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    DropdownMenusModule,
    NgbDropdownModule,
    NgbTooltipModule,
    WidgetsModule
  ]
})
export class WebUiModule {
  constructor() {
  }
}

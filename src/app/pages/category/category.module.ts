import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GeneralModule } from '../../_metronic/partials/content/general/general.module';
import { CategoryComponent } from './category.component';
import { FormsModule } from '@angular/forms';
import { NgbNavModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { HighlightModule } from 'ngx-highlightjs';
import { SubcategoryComponent } from './subcategory/subcategory.component';

@NgModule({
  declarations: [CategoryComponent, SubcategoryComponent],
  imports: [
    CommonModule,
    FormsModule,
    GeneralModule,
    HighlightModule,
    NgbNavModule,
    NgbTooltipModule,
    RouterModule.forChild([
      {
        path: '',
        component: CategoryComponent,
      },
      {
        path: 'sub-category',
        component: SubcategoryComponent,
      },
    ]),
  ],
})
export class CategoryModule {}

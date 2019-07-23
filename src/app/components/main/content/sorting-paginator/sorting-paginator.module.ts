import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortingPaginatorRoutingModule } from './sorting-paginator-routing.module';
import { SortingPaginatorComponent } from './sorting-paginator.component';


@NgModule({
  declarations: [
    SortingPaginatorComponent
  ],
  imports: [
    CommonModule,
    SortingPaginatorRoutingModule
  ]
})
export class SortingPaginatorModule { }

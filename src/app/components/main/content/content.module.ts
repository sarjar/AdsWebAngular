import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { AdsListModule } from './ads-list/ads-list.module';
import { PagesPaginatorModule } from './pages-paginator/pages-paginator.module';
import { SortingPaginatorModule } from './sorting-paginator/sorting-paginator.module';


@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    AdsListModule,
    PagesPaginatorModule,
    SortingPaginatorModule,
    CommonModule,
    ContentRoutingModule
  ]
})
export class ContentModule { }

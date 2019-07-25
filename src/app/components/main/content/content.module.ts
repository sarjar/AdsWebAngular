import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentComponent } from './content.component';
import { AdsListModule } from './ads-list/ads-list.module';
import { PagesPaginatorModule } from './pages-paginator/pages-paginator.module';
import { SortingPaginatorModule } from './sorting-paginator/sorting-paginator.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    AdsListModule,
    PagesPaginatorModule,
    SortingPaginatorModule
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule { }

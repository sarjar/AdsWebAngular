import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsListComponent } from './ads-list.component';
import { AdItemModule } from './ad-item/ad-item.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PagesPaginatorModule } from './pages-paginator/pages-paginator.module';
import { SortingPaginatorModule } from './sorting-paginator/sorting-paginator.module';

@NgModule({
  declarations: [AdsListComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    AdItemModule,
    PagesPaginatorModule,
    SortingPaginatorModule
  ],
  exports: [
    AdsListComponent
  ]
})
export class AdsListModule {}

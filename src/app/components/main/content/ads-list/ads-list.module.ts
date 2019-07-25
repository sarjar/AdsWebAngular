import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsListComponent } from './ads-list.component';
import { AdItemModule } from './ad-item/ad-item.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdsListComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AdItemModule
  ],
  exports: [
    AdsListComponent
  ]
})
export class AdsListModule {}

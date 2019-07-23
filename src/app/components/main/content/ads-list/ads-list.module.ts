import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsListRoutingModule } from './ads-list-routing.module';
import { AdsListComponent } from './ads-list.component';
import { AdModule } from './ad/ad.module';


@NgModule({
  declarations: [
    AdsListComponent
  ],
  imports: [
    AdModule,
    CommonModule,
    AdsListRoutingModule
  ]
})
export class AdsListModule { }

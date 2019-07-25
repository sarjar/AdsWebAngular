import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdItemComponent } from './ad-item.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [AdItemComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    AdItemComponent
  ]
})
export class AdItemModule {}

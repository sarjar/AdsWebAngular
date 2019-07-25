import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from './sidebar/sidebar.module';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main.component';
import { AdsListModule } from './ads-list/ads-list.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SidebarModule,
    AdsListModule
  ]
})
export class MainModule { }

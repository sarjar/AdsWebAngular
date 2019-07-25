import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortingPaginatorComponent } from './sorting-paginator.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SortingPaginatorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    SortingPaginatorComponent
  ]
})
export class SortingPaginatorModule { }

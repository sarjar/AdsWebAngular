import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesPaginatorComponent } from './pages-paginator.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PagesPaginatorComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [PagesPaginatorComponent]
})
export class PagesPaginatorModule {}

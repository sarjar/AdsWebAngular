import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesPaginatorRoutingModule } from './pages-paginator-routing.module';
import { PagesPaginatorComponent } from './pages-paginator.component';


@NgModule({
  declarations: [
    PagesPaginatorComponent
  ],
  imports: [
    CommonModule,
    PagesPaginatorRoutingModule
  ]
})
export class PagesPaginatorModule { }

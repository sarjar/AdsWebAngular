import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentModule } from './content/content.module';
import { SidebarModule } from './sidebar/sidebar.module';

@NgModule({
  declarations: [],
  imports: [
    SidebarModule,
    ContentModule,
    CommonModule
  ]
})
export class MainModule { }

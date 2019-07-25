import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditCreateComponent } from './edit-create.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    EditCreateComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class EditCreateModule { }

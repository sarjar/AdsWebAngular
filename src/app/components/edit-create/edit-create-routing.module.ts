import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditCreateComponent } from './edit-create.component';

const routes: Routes = [
  { path: 'add', component: EditCreateComponent },
  { path: 'edit/:id', component: EditCreateComponent }
];

@NgModule({
  exports: [RouterModule]
})
export class EditCreateRoutingModule {}

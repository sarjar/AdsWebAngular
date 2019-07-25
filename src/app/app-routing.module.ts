import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { EditCreateComponent } from './components/edit-create/edit-create.component';

const routes: Routes = [
  { path: '', redirectTo: 'items/men', pathMatch: 'full' },
  {
    path: 'items/:type',
    component: MainComponent
  },
  { path: 'add', component: EditCreateComponent },
  { path: 'edit/:id', component: EditCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

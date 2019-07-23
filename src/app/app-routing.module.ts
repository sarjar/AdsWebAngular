import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { EditorComponent } from './components/editor/editor.component';

const routes: Routes = [
  { path: '', redirectTo: '/items/men', pathMatch: 'full' },
  {
    path: 'items/:type',
    loadChildren: './components/main/main.module#MainModule'
  },
  {
    path: 'add',
    loadChildren: './components/editor/editor.module#EditorModule'
  },
  {
    path: 'edit/:id',
    loadChildren: './components/editor/editor.module#EditorModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

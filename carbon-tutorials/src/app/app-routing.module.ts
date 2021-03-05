// Angular Core Elements
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// App components/elements
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tables',
    loadChildren: () => import('./tables-tutorial/cdst-table.module').then(module => module.CdstTableModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

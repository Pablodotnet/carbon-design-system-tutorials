// Angular Core Elements
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Tables Module Components
import { CdstTableComponent } from './cdst-table/cdst-table.component';

const routes: Routes = [
  {
    path: '',
    component: CdstTableComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CdstTableRoutingModule { }

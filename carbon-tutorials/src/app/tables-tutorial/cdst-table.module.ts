import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Module Routing
import { CdstTableRoutingModule } from './cdst-table-routing.module';

// App Components
import { CdstTableComponent } from './cdst-table/cdst-table.component';

// Carbon Modules
import { TableModule } from 'carbon-components-angular';

@NgModule({
  declarations: [
    CdstTableComponent
  ],
  imports: [
    CommonModule,
    // Module Routing
    CdstTableRoutingModule,
    // Carbon Modules
    TableModule
  ]
})
export class CdstTableModule { }

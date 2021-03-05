import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Carbon Modules
import { UIShellModule } from 'carbon-components-angular';

// Shared Components
import { NavHeaderComponent } from './nav-header/nav-header.component';

@NgModule({
  declarations: [
    NavHeaderComponent
  ],
  imports: [
    CommonModule,
    UIShellModule,
  ],
  exports: [
    NavHeaderComponent
  ]
})
export class SharedModule { }

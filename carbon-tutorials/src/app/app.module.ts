import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Carbon Modules
import { TilesModule } from 'carbon-components-angular';

// App Modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // SHARED MODULE
    SharedModule,
    // CARBON MODULES
    TilesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

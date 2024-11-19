import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InPlayComponent } from './in-play/in-play.component';
import { TodayComponent } from './today/today.component';
import { TommorrowComponent } from './tommorrow/tommorrow.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InPlayComponent,
    TodayComponent,
    TommorrowComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

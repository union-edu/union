import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {CoreModule} from "./core/core.module";
import {ToolboxModule} from "./toolbox/toolbox.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule,
      CoreModule,
      ToolboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

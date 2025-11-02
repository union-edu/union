import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import {ToolboxModule} from "../toolbox/toolbox.module";
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import {PagesRoutingModule} from "./pages-routing.module";



@NgModule({
  declarations: [
    TestComponent,
    NotFoundComponent,
    HomeComponent
  ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        ToolboxModule
    ]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import {ToolboxModule} from "../toolbox/toolbox.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterLink} from "@angular/router";



@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent
    ],
    exports: [
        NavbarComponent
    ],
  imports: [
    CommonModule,
    ToolboxModule,
    MatToolbarModule,
    RouterLink
  ]
})
export class SharedModule { }

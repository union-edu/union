import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from "@angular/forms";
import {ToolboxModule} from "../toolbox/toolbox.module";

@NgModule({
  declarations: [
    LoginComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        ToolboxModule
    ]
})
export class CoreModule { }

import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from "@angular/forms";
import {ToolboxModule} from "../toolbox/toolbox.module";
import {CoreRoutingModule} from "./core-routing.module";

@NgModule({
  declarations: [
    LoginComponent
  ],
    imports: [
        CommonModule,
        CoreRoutingModule,
        FormsModule,
        ToolboxModule
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it only once in AppModule');
        }
    }
}
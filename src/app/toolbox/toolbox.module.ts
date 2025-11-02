import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnionButtonComponent } from './components/union-button/union-button.component';
import { UnionInputComponent } from './components/union-input/union-input.component';
import { UnionCheckboxComponent } from './components/union-checkbox/union-checkbox.component';
import { UnionSelectComponent } from './components/union-select/union-select.component';
import {MatButtonModule} from "@angular/material/button";



@NgModule({
    declarations: [
        UnionButtonComponent,
        UnionInputComponent,
        UnionCheckboxComponent,
        UnionSelectComponent
    ],
    exports: [
        UnionButtonComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule
    ]
})
export class ToolboxModule { }

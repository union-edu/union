import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "../pages/home/home.component";

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('../pages/pages.module').then(m => m.PagesModule)
    },
    {
        path: '',
        loadChildren: () => import('../toolbox/toolbox.module').then(m => m.ToolboxModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'  // rotta principale va a login
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '**',
        redirectTo: 'home'  // wildcard reindirizza a login
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class CoreRoutingModule { }

import {Component, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'union-web-fe';

    showNavbar = true;

    constructor(private router: Router) {}

    ngOnInit() {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe(event => {
            const navEnd = event as NavigationEnd;  // cast tipo qui
            const hideOnRoutes = ['/not-found', '/login', '/error'];
            this.showNavbar = !hideOnRoutes.includes(navEnd.urlAfterRedirects);
        });
    }
}

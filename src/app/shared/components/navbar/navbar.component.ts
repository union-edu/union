import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    @Output() onLogin = new EventEmitter<void>();
    @Output() onRegister = new EventEmitter<void>();

    handleLogin() {
        this.onLogin.emit();
    }

    handleRegister() {
        this.onRegister.emit();
    }
}

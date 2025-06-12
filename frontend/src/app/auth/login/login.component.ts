import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <form (ngSubmit)="login()">
      <input type="email" [(ngModel)]="email" name="email" required placeholder="Email" />
      <input type="password" [(ngModel)]="password" name="password" required placeholder="Contraseña" />
      <button type="submit">Login</button>
      <div *ngIf="error" style="color: red;">{{error}}</div>
    </form>
  `
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.email, this.password).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: () => this.error = 'Credenciales inválidas o servidor fuera de línea.'
    });
  }
}

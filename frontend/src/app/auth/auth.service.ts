// frontend/src/app/auth/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from '../../environments/environment'; // <--- AÑADE ESTA LÍNEA

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = environment.apiUrl; // <--- Cambiado aquí
  private tokenKey = 'cop_token';

  isLoggedIn$ = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    return this.http.post<{ access_token: string }>(
      `${this.apiUrl}/login`, // <--- YA USAS apiUrl CENTRALIZADO
      { email, password }
    ).pipe(
      tap(response => {
        if (response?.access_token) {
          localStorage.setItem(this.tokenKey, response.access_token);
          this.isLoggedIn$.next(true);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.isLoggedIn$.next(false);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
  return typeof window !== 'undefined'
    ? localStorage.getItem(this.tokenKey)
    : null;
  }

  hasToken(): boolean {
  return typeof window !== 'undefined'
    ? !!localStorage.getItem(this.tokenKey)
    : false;
  }
}  

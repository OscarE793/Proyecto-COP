// src/app/features/dashboard/dashboard.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,  // ¡esto es clave!
  imports: [CommonModule, RouterOutlet] // <- ¡Agrega esto!
})
export class DashboardComponent {
  openMenu: string | null = null;
  toggle(menu: string) {
    this.openMenu = this.openMenu === menu ? null : menu;
  }
}

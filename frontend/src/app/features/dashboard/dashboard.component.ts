import { Component } from '@angular/core';

 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  openMenu: string | null = null;
  toggle(menu: string) {
    this.openMenu = this.openMenu === menu ? null : menu;
  }
}

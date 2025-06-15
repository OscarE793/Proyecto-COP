import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginComponent    // ← IMPORTA aquí, NO en declarations
  ],
  exports: [LoginComponent]
})
export class AuthModule {}

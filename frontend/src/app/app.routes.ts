import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

// Importa todos los componentes de tus módulos

// PLANEACIÓN
import { AsignacionComponent } from './features/planeacion/asignacion/asignacion.component';
import { RegistroHorasComponent } from './features/planeacion/registro-horas/registro-horas.component';
import { CalendarioComponent } from './features/planeacion/calendario/calendario.component';

// COSTOS Y GASTOS
import { RegistrogastosComponent } from './features/costos/registrogastos/registrogastos.component';
import { HistoricoComponent } from './features/costos/historico/historico.component';

// GESTIÓN 360
import { GestionlicenciasComponent } from './features/gestion360/gestionlicencias/gestionlicencias.component';
import { PermisoslicenciasComponent } from './features/gestion360/permisoslicencias/permisoslicencias.component';

// PRODUCTOS Y SERVICIOS
import { ServiciosproductosComponent } from './features/productos/serviciosproductos/serviciosproductos.component';

// APROBACIONES
import { AprolicenciasComponent } from './features/aprobaciones/aprolicencias/aprolicencias.component';

// GESTIÓN USUARIOS
import { ClientesComponent } from './features/usuarios/clientes/clientes.component';
import { UsuarioscopComponent } from './features/usuarios/usuarioscop/usuarioscop.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      // PLANEACIÓN
      { path: 'planeacion/asignacion', component: AsignacionComponent },
      { path: 'planeacion/registro-horas', component: RegistroHorasComponent },
      { path: 'planeacion/calendario', component: CalendarioComponent },

      // COSTOS Y GASTOS
      { path: 'costos/registrogastos', component: RegistrogastosComponent },
      { path: 'costos/historico', component: HistoricoComponent },

      // GESTIÓN 360
      { path: 'gestion360/gestionlicencias', component: GestionlicenciasComponent },
      { path: 'gestion360/permisoslicencias', component: PermisoslicenciasComponent },

      // PRODUCTOS Y SERVICIOS
      { path: 'productos/serviciosproductos', component: ServiciosproductosComponent },

      // APROBACIONES
      { path: 'aprobaciones/aprolicencias', component: AprolicenciasComponent },

      // GESTIÓN USUARIOS
      { path: 'usuarios/clientes', component: ClientesComponent },
      { path: 'usuarios/usuarioscop', component: UsuarioscopComponent },

      // Ruta por defecto: redirige a Planeación/Asignación al entrar al dashboard
      { path: '', redirectTo: 'planeacion/asignacion', pathMatch: 'full' }
    ]
  },

  // Cualquier otra ruta lleva a login
  { path: '**', redirectTo: '/login' }
];

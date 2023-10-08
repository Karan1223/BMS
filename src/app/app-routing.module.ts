import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ManagerComponent } from './component/manager/manager.component';
import { SupervisorComponent } from './component/supervisor/supervisor.component';
import { ResidentComponent } from './component/resident/resident.component';
import { AuthGuard } from './guard/auth.guard';
import { UnauthorizedComponent } from './component/unauthorized/unauthorized.component';
import { SecurityComponent } from './component/security/security.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  { path: 'manager', component: ManagerComponent, canActivate: [AuthGuard], data: { expectedRole: 'manager' } },
  { path: 'supervisor', component: SupervisorComponent, canActivate: [AuthGuard], data: { expectedRole: 'supervisor' } },
  {path: 'resident', component: ResidentComponent, canActivate: [AuthGuard], data: { expectedRole: 'resident' } },
  {path: 'unauthorized', component: UnauthorizedComponent},
  {path: 'security', component: SecurityComponent,canActivate: [AuthGuard], data: { expectedRole: 'security' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

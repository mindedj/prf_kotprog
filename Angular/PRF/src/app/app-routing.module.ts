import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './guards/auth.guard';
import { HibakezeloComponent } from './hibakezelo/hibakezelo.component';
import { LoginComponent } from './login/login.component';
import { RegisztracioComponent } from './regisztracio/regisztracio.component';
import { WebshopComponent } from './webshop/webshop.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'regisztracio', component: RegisztracioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'webshop', component: WebshopComponent, canActivate: [AuthGuard]},
  {path: 'hibakezelo', component: HibakezeloComponent },
  {path: '**', component: HibakezeloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

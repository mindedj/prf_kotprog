import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HibakezeloComponent } from './hibakezelo/hibakezelo.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { WebshopComponent } from './webshop/webshop.component';
import { AdminComponent } from './admin/admin.component';
import { RegisztracioComponent } from './regisztracio/regisztracio.component';

@NgModule({
  declarations: [
    AppComponent,
    HibakezeloComponent,
    LoginComponent,
    WebshopComponent,
    AdminComponent,
    RegisztracioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

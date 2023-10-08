import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerComponent } from './component/manager/manager.component';
import { SupervisorComponent } from './component/supervisor/supervisor.component';
import { ResidentComponent } from './component/resident/resident.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './component/navbar/navbar.component';
import { UnauthorizedComponent } from './component/unauthorized/unauthorized.component';
import { SecurityComponent } from './component/security/security.component'; // Import this line


@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    SupervisorComponent,
    ResidentComponent,
    LoginComponent,
    NavbarComponent,
    UnauthorizedComponent,
    SecurityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

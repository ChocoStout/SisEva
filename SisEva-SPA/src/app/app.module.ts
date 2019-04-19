import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { Router } from './routes';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { AuthGuard } from './guards/auth.guard';
import { fromEventPattern } from 'rxjs';
import { EncuestaIdComponent } from './encuesta-id/encuesta-id.component';
import { ReportesComponent } from './reportes/reportes.component';
import { AboutComponent } from './about/about.component';

@NgModule({
   declarations: [
      AppComponent,
      NavBarComponent,
      HomeComponent,
      LoginComponent,
      RegistrarComponent,
      EncuestaComponent,
      EncuestaIdComponent,
      ReportesComponent,
      AboutComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(Router),
      FormsModule
   ],
   providers: [
      AuthService,
      AuthGuard
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

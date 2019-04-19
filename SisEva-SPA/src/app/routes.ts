import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { AuthGuard } from './guards/auth.guard';
import { EncuestaIdComponent } from './encuesta-id/encuesta-id.component';
import { ReportesComponent } from './reportes/reportes.component';
import { AboutComponent } from './about/about.component';

export const Router: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registrar', component: RegistrarComponent },
    { path: 'about', component:AboutComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'encuesta', component: EncuestaComponent },
            { path: 'reportes', component: ReportesComponent },
            { path: 'encuesta/:IdEncuesta', component: EncuestaIdComponent}
        ]
    }
];

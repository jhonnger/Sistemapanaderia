import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {AuthGuardService} from './services/auth-guard.service';
import {DashComponent} from './components/dash/dash.component';
import {UmComponent} from './components/um/um.component';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: DashComponent, canActivate: [ AuthGuardService ],
    children: [
      { path: 'home', component: HomeComponent},
      { path: 'um', component: UmComponent},
    ]},
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes );

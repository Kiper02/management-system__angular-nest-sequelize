import { Routes } from '@angular/router';
import { SchoolComponent } from './pages/school/school.component';
import { AuthComponent } from './pages/auth/auth.component';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './guards/auth.guard';
import { RegistrationLinkComponent } from './pages/registration-link/registration-link.component';

export const routes: Routes = [
    {path: '', component: SchoolComponent, pathMatch: 'full'},
    {path: 'login', component: AuthComponent},
    {path: 'registration', component: AuthComponent},
    {path: 'home', component: HomeComponent, canActivate: [authGuard]},
    {path: 'registration/:link', component: RegistrationLinkComponent}
    // {path: '**', redirectTo: '/login'}
];
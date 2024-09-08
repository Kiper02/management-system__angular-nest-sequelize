import { Routes } from '@angular/router';
import { SchoolComponent } from './pages/school/school.component';
import { AuthComponent } from './pages/auth/auth.component';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path: '', component: SchoolComponent, pathMatch: 'full'},
    {path: 'login', component: AuthComponent},
    {path: 'registration', component: AuthComponent},
    {path: 'home', component: HomeComponent, canActivate: [authGuard]},
    // {path: '**', redirectTo: '/login'}
];
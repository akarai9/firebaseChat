import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { AppComponent } from './app.component';

import { AuthGuard } from './auth-guard.service';


export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
    },
    // {
    //     path: 'home',
    //     component: HomeComponent,
    // },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate:[AuthGuard]
    },
    {
        path: 'chat',
        component: ChatComponent,
        canActivate:[AuthGuard]
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes, { preloadingStrategy: PreloadAllModules });

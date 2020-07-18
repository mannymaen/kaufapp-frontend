import { Routes } from '@angular/router';


export const  AppRoutes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    },
    {
        path: '',
        loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
    }
]
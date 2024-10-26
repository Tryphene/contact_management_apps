import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListeComponent } from './pages/liste/liste.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "mes-contacts",
        component: ListeComponent
    }
];

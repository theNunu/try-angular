import { Routes } from '@angular/router';
import { Anything } from './pages/anything/anything';
import { Champion } from './pages/champion/champion';

export const routes: Routes = [
    {
        path: "",
        // title: 'App Home Page',
        component: Anything
    },
    {
        path: "champion",
        component: Champion

    },
    {
        path: "**",
        redirectTo: ""
    }
];

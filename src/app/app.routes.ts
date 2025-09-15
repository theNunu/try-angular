import { Routes } from '@angular/router';
import { Anything } from './pages/anything/anything';
import { Champion } from './pages/champion/champion';
import { AddChampion } from './components/champion/add-champion/add-champion';
import { ListChampion } from './components/champion/list-champion/list-champion';

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
    // {
    //     path: "add-champion",
    //     component: AddChampion
    // },
    //     {
    //     path: "list-champion",
    //     component: ListChampion
    // },
    {
        path: "**",
        redirectTo: ""
    }
];

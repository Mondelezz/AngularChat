import { Routes } from '@angular/router';
import {RegAndAuthComponent} from './registration/registration.component';
import {LobbyComponent} from './lobby/lobby.component'
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
    {   path: 'home', component: RegAndAuthComponent    },
    {   path: 'lobby', component: LobbyComponent    },
    {   path: '',   redirectTo: 'home', pathMatch: 'full'   },
    {   path: '**', component: PageNotFoundComponent}
];

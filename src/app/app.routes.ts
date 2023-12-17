import { Routes } from '@angular/router';
import {RegAndAuthComponent} from './registration/registration.component';
import {LobbyComponent} from './lobby/lobby.component'
export const routes: Routes = [
    {path: 'home', component: RegAndAuthComponent},
    {path: 'lobby', component: LobbyComponent},
];

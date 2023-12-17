import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RegAndAuthComponent} from './registration/registration.component';
import {LobbyComponent} from './lobby/lobby.component'
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}
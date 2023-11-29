import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}
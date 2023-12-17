import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom, mergeApplicationConfig } from '@angular/core';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';


  bootstrapApplication(AppComponent,  {
    providers: [
      importProvidersFrom(HttpClientModule),
      provideRouter(routes)
    ]
  });
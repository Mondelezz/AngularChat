import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { RegistrationComponent } from './app/registration/registration.component';
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(RegistrationComponent, appConfig)
  .catch((err) => console.error(err));

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, RegistrationComponent],
  templateUrl: './registration/registration.component.html',
  styleUrl: './registration/registration.component.scss'
})

export class AppComponent
{
  title = 'Registration';
  user: any = 
    {
      name: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    };
    submitted = false;

    onSubmit()
    {
      this.submitted = true;
    }
  }

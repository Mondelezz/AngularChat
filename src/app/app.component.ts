import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClient } from '@angular/common/http';

export interface User
{
      name: string,
      phoneNumber: string,
      password: string,
      confirmPassword: string,
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, RegistrationComponent],
  templateUrl: './registration/registration.component.html',
  styleUrl: './registration/registration.component.scss'
})

export class AppComponent
{
  constructor(private http: HttpClient){}
  title = 'Registration';
  user: User = 
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
      this.http.post('https://localhost:7169/api/User/reg', this.user)
      .subscribe({
        next: response => console.log('Регистрация прошла успешно: ' + response), 
        error: err => console.log('Не удалось зарегистрироваться: ' + err),
        });
    }
  }

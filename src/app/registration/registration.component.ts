import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reg',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent
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
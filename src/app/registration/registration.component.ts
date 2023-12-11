import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormGroup, FormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reg',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegAndAuthComponent
 {
  title = 'Registration';
  registrationForm: FormGroup;
  authorizationForm: FormGroup;
  isRegistrationFormVisible = true;
  isAuthorizationFormVisible = false;
  constructor(private http: HttpClient)
  {
    this.registrationForm = new FormGroup(
      {
        userName: new FormControl('', Validators.required),
        phoneNumber: new FormControl('', [Validators.required, Validators.pattern("[0-9]{10}")]),
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required)
      }
    );

    this.authorizationForm = new FormGroup(
      {
        phoneNumber: new FormControl('', [Validators.required, Validators.pattern("[0-9]{10}")]),
        password: new FormControl('', Validators.required),
      }
    );
  } 
    submitted = false;
    onSubmitReg() 
    {
      console.log('Submitting registration form');
      this.submitted = true;

      if(this.registrationForm.valid)
      {  
        this.http.post('https://localhost:7169/api/User/reg', this.registrationForm.value)
          .subscribe({
            next: response => console.log('Response:', response),
            error: this.handleHttpError
          });
      }
    }
    onSubmitAuth()
    {
      console.log('Submitting authorization form');
      this.submitted = true;
      if(this.authorizationForm.valid)
      {
        this.http.post('https://localhost:7169/api/Auth/login', this.authorizationForm.value)
        .subscribe({
          next: response => console.log('Response:', response),
          error: this.handleHttpError
        });
      }
    }

    private handleHttpError(err: HttpErrorResponse)
    {
        console.error('Error Status:', err.status);
        console.error('Error Message:', err.message);
        console.error('Error Details:', err.error);
    }
    
    showRegistrationForm() {
      this.isRegistrationFormVisible = true;
      this.isAuthorizationFormVisible = false;
    }
  
    showAuthorizationForm() {
      this.isRegistrationFormVisible = false;
      this.isAuthorizationFormVisible = true;
    }
}
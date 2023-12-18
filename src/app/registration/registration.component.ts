import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormGroup, FormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LobbyComponent } from '../lobby/lobby.component';
@Component({
  selector: 'app-reg',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule, LobbyComponent],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})

export class RegAndAuthComponent
 {
  title = 'Registration';
  isAuthenticated : boolean;
  registrationForm: FormGroup;
  authorizationForm: FormGroup;
  isRegistrationFormVisible = true;
  isAuthorizationFormVisible = false;
  constructor(private http: HttpClient, private router: Router)
  {
    this.isAuthenticated = false;
    this.registrationForm = new FormGroup(
      {
        userName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
        phoneNumber: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(11), Validators.maxLength(11)]),
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required)
      }
    );

    this.authorizationForm = new FormGroup(
      {
        phoneNumber: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(11), Validators.maxLength(11)]),
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
      else
      {
        console.log('error valid form');
      }
    }

    
    onSubmitAuth()
    {
      console.log('Submitting authorization form');
      this.submitted = true;
      if(this.authorizationForm.valid)
      {
        this.http.post('https://localhost:7169/api/Auth/login', this.authorizationForm.value, {
        responseType: 'text'
      })     
        .subscribe({
          next: (response) =>
           {
              console.log('Raw response:', response);
              localStorage.setItem("jwt", response);
              this.isAuthenticated = true;  
              this.router.navigate(['lobby']);                           
           },
          error: (err: HttpErrorResponse) => 
          {
              this.isAuthenticated = false;
              this.router.navigate(['home']);
              console.error('Error:', err);
          },
        });        
      }
      else     
        console.log('error valid form');     
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
import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormGroup, FormsModule } from '@angular/forms';
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
export class RegistrationComponent
 {
  title = 'Registration';
  registrationForm: FormGroup;
  constructor(private http: HttpClient)
  {
    this.registrationForm = new FormGroup(
      {
        userName: new FormControl(''),
        phoneNumber: new FormControl(''),
        password: new FormControl(''),
        confirmPassword: new FormControl('')
      }
    );
  } 
    submitted = false;
    onSubmit() {
      this.submitted = true;

      if(this.registrationForm.valid)
      {  
        this.http.post('https://localhost:7169/api/User/reg', this.registrationForm.value)
          .subscribe({
            next: response => console.log('Response:', response),
            error: (err: HttpErrorResponse) => {
              console.error('Error Status:', err.status);
              console.error('Error Message:', err.message);
              console.error('Error Details:', err.error); 
            },
          });
      }
      
    }
    
}
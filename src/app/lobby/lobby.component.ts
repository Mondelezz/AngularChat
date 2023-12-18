import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface user 
{
  userName: string,
  phoneNumber: string
}

@Component({
  selector: 'app-lobby',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.scss'
})

export class LobbyComponent {
  
  constructor(private http: HttpClient )
  {    
  }
  submitted = false;
  onSubmit()
  {
    this.submitted = true;
    
  }
}

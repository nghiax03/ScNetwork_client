import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { error } from 'console';
import { LoginDTO } from '../dtos/user.dto';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  gmail: string = '';
  password: string = '';
  constructor(private userService: UserService,
    private router: Router
  ){

  }
  login() {
    const message = 
      `email: ${this.gmail}` +
      `password: ${this.password}`
      
    debugger

    const loginDTO: LoginDTO =
    {
      "email": this.gmail,
      "password": this.password
    }
    this.userService.login(loginDTO).subscribe(
      {
        next: (response: any) => {
          debugger
          console.log(response.status);
          console.log(response);
          if(response && response.token){
            this.router.navigate(['/social']);
          } else {
  
          }
        },
        complete: () => {
          debugger
        },
        error: (error: any) => {
          alert(`Cannot login, error: ${error.error}`)
        }
      });
  }
}

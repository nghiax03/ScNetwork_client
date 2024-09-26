import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { RegisterDTO } from '../dtos/register.dto';
import { error } from 'console';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  @ViewChild('registerForm') registerForm!: NgForm;
  gmail: string;
  username: string;
  password: string;
  retypePassword: string;
  isAccepted: false;
  errorMessage: string;

  constructor(private router: Router, private userService: UserService) {
    this.username = '';
    this.gmail = '';
    this.password = '';
    this.retypePassword = '';
    this.isAccepted = false;
    this.errorMessage = '';
  }

  register() {
    const message = `username: ${this.username}` +
      `email: ${this.gmail}` +
      `password: ${this.password}` +
      `retypePassword: ${this.retypePassword}` +
      `isAccepted: ${this.isAccepted}`
    // alert(message)
    
    const registerDTO: RegisterDTO =
    {
      "username": this.username,
      "email": this.gmail,
      "password": this.password,
      "retypePassword": this.retypePassword,
      "full_name": "",
      "profile_picture": ""
    }
    this.userService.register(registerDTO).subscribe(
      {
        next: (response: any) => {
          debugger
          if(response && (response.status === 200 || response.status === 201)){
            this.router.navigate(['/login']);
          } else {
  
          }
        },
        complete: () => {
          debugger
        },
        error: (error: any) => {
          alert(`Cannot register, error: ${error.error}`)
        }
      });
  }

  isGmail(email: string): boolean {
    return email.endsWith('@gmail.com');
  }

  checkPasswordMatch() {
    if (this.password != this.retypePassword) {
      this.registerForm.form.controls['retypePassword'].setErrors({ 'passwordMismath': true });
    }
    else {
      this.registerForm.form.controls['retypePassword'].setErrors(null);
    }
  }
}

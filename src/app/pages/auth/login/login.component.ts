import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {RegisterDto, UserControllerService} from "../../../openapi-client";
import {MatInputModule} from "@angular/material/input";


@Component({
  selector: 'pm-login',
  standalone: true,
  imports: [CommonModule, MatCardModule, FormsModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formGroup!: FormGroup;


  constructor(private fb: FormBuilder,
              private userService: UserControllerService) {
    this.formGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  logform() {
    console.log(this.formGroup);
    if (this.formGroup.valid) {
      this.userService.login(this.formGroup.value as RegisterDto).subscribe(
        (token) => {
          console.log(token);
          localStorage.setItem('ACCESS_TOKEN', token.token as string);
          alert('Successfully logged in');
        },
        (error) => {
          console.error('Login failed:', error);
          // Handle error (e.g., display an error message)
          alert('Login failed');
        }
      );
    }
  }
}

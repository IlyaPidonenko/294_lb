// login.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { RegisterDto, UserControllerService } from "../../../openapi-client";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: 'pm-login',
  standalone: true,
  imports: [CommonModule, MatCardModule, FormsModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formGroup!: FormGroup;

  /**
   * Constructs the LoginComponent.
   *
   * @param fb - FormBuilder for handling reactive forms.
   * @param userService - User service for making API calls related to user actions.
   */
  constructor(private fb: FormBuilder, private userService: UserControllerService) {
    // Initialize the login form with email and password fields and their validators
    this.formGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  /**
   * Logs the form data to the console and attempts to perform user login.
   * If the form is valid, it calls the user service to log in the user.
   * If successful, it stores the access token in local storage and displays a success message.
   * If unsuccessful, it logs the error and displays a failure message.
   */
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

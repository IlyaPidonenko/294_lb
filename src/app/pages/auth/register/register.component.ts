// register.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from "@angular/material/input";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { RegisterDto, UserControllerService } from "../../../openapi-client";

/**
 * Component for user registration.
 */
@Component({
  selector: 'pm-register',
  standalone: true,
  imports: [CommonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  /**
   * Form group for the registration form.
   */
  formGroup!: FormGroup;

  /**
   * Constructs the RegisterComponent.
   * @param fb FormBuilder for creating the registration form.
   * @param userService Service for user-related actions.
   */
  constructor(private fb: FormBuilder, private userService: UserControllerService) {
    // Initialize the registration form with form controls and validators.
    this.formGroup = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      street: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      zip: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      city: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      country: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      mobilePhone: ['', [Validators.minLength(0), Validators.maxLength(15)]],
      phone: ['', [Validators.minLength(0), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$')]]
    })
  }

  /**
   * Handles the submission of the registration form.
   * If the form is valid, registers the user using the userService,
   * displays a success message, and logs the form data.
   */
  submit() {
    console.log(this.formGroup);
    console.log(this.formGroup.errors);
    if (this.formGroup.valid) {
      // Get the values from the form and send them to the server for registration.
      this.userService.register(this.formGroup.value as RegisterDto).subscribe(val => {
        alert('Successfully registered');
      })
    }
  }
}

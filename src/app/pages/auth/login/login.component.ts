import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'pm-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private formGroup: any;

  logForm() {
    console.log(this.formGroup.value);
  }
}

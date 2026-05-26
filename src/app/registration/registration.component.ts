import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],

      password: ['', [Validators.required, Validators.minLength(6)]],

      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    // Check if form is invalid
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }

    // Check password match
    const password = this.registrationForm.value.password;
    const confirmPassword =
      this.registrationForm.value.confirmPassword;

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Success
    alert('Form submitted successfully!');

    console.log(this.registrationForm.value);
  }
}
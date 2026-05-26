import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  studentForm!: FormGroup;

  ngOnInit() {
    this.studentForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      age: new FormControl(null, [Validators.required, Validators.min(18)]),
    });
  }

  onSubmit() {
    console.log('Form submitted:', this.studentForm.value);
  }
}
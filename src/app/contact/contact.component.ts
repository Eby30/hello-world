import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  user = {
    name: '',
    email: ''
  };

  onSubmit() {
    console.log('Form Submitted');
    console.log('Name:', this.user.name);
    console.log('Email:', this.user.email);
  }

}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {

  userName = 'Eby';
  userRole = 'admin';

  ngOnInit(): void {
    console.log('Parent component initialized');
  }
}
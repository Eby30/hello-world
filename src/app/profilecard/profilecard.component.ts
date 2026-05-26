import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilecard',
  templateUrl: './profilecard.component.html',
  styleUrl: './profilecard.component.css',
})
export class ProfilecardComponent implements OnInit {

  @Input() name: string = '';
  @Input() role: string = '';

  ngOnInit(): void {
    console.log('Child component initialized');
  }
}
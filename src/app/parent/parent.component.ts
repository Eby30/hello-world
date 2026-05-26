import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {

  data = 0;

  constructor() {
    console.log('Parent Constructor');
  }

  ngOnInit() {
    console.log('Parent ngOnInit');
  }

  dataFromParent() {
    this.data += 1;
  }
}
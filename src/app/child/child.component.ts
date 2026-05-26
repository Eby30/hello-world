import {
  Component,
  Input,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {

  @Input() parentData: any;

  constructor() {
    console.log('Child Constructor');
  }

  ngOnInit() {
    console.log('Child ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngOnDestroy() {
    console.log('Child Destroyed');
  }
}
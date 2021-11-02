import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  random = Math.random();

  @Input() value: 'X' | 'O' | undefined;
}

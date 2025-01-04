import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  imports: [NgIf, FormsModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css',
})
export class NgIfComponent {
  div1Visiable: boolean = false;

  number1: String = '';
  number2: String = '';

  hide() {
    this.div1Visiable = false;
  }

  show() {
    this.div1Visiable = true;
  }
}

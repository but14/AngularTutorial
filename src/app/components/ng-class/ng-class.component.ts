import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-class',
  imports: [NgClass, FormsModule],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css',
})
export class NgClassComponent {
  div1Background: String = "";
  
  isChecked: boolean = false;

  div3Background: String = "";

  changeBackground(className: String) {
    this.div1Background = className;
  }




}

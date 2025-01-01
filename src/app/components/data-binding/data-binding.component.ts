import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  firstName: String = 'PagPag';

  isActive: boolean = false;

  currentDate: Date = new Date();

  changeCity: String = 'changeCity';

  rollNo: Number = 123;

  placeholder: string = 'Enter full name';

  divClassName: String = 'bg-primary';

  cityChange: String = "";

  constructor() {
    console.log(this.firstName);

    this.isActive = true;
    console.log(this.isActive);

    console.log(this.currentDate);

    console.log(this.rollNo);
  }

  showAlertSuccess() {
    alert('Hello and WelCome angular!');
  }
  showAlertDanger() {
    alert('Error! Something went wrong.');
  }

  onChangeCity() {
    console.log(this.changeCity);
  }
}

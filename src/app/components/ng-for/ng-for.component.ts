import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css',
})
export class NgForComponent {
  cityList: String[] = [
    'Ho Chi Minh',
    'Can Tho',
    'Ha Noi',
    'Da Nang',
    'Hai Phong',
  ];

  studentList: any[] = [
    { name: 'Long', age: '20', city: 'Can Tho' },
    { name: 'Quan', age: '20', city: 'Ho Chi Minh' },
    { name: 'Thinh', age: '20', city: 'Ha Noi' },
    { name: 'Duong', age: '20', city: 'Da Nang' },
    { name: 'Phuc', age: '20', city: 'Hai Phong' },
  ];
}

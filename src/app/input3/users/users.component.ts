import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  users: any = [
    new User('ahmed', 'adel', 'IT'),
    new User('rashed', 'omar', 'ACC'),
    new User('bader', 'emad', 'RS'),
    new User('khalid', 'fahad', 'LAW'),
  ];



}

export class User {
  firstName = "";
  secondName = "";
  job = "";
  constructor(firstName: string, secondName: string, job: string) {
    this.firstName =firstName
    this.secondName =secondName
    this.job =job

  }
}

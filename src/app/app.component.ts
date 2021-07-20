export interface User {
  firstName: string;
  lastName: string;
  email: string
}

const USER_DATA: User[] = [
  { firstName: 'geoff', lastName: 'fox', email: 'geoff@computer.com' },
  { firstName: 'joanna', lastName: 'fox', email: 'jo@computer.com' }
]

import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestFormAngularRev1';
  newFirstName!: string;
  newLastName!: string;
  newEmail!: string;

  // Mat Table properties
  displayedColumns: string[] = ['firstName', 'lastName', 'email'];
  dataSource = USER_DATA;

  constructor() {

  }

  onSave() {

  }

  onCancel() {

  }
  
}

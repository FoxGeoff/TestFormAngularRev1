export interface User {
  firstName: string;
  lastName: string;
  email: string
}

const USER_DATA: User[] = [
  { firstName: 'geoff', lastName: 'fox', email: 'geoff@computer.com' },
  { firstName: 'joanna', lastName: 'fox', email: 'jo@computer.com' }
]

import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
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
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  constructor() { }

  onSave() {
    this.dataSource.push({
      firstName: this.newFirstName,
      lastName: this.newLastName,
      email: this.newEmail
    });

    //debug code
    console.log(this.dataSource);

    this.table.renderRows();
  }

  onCancel() {
    this.newFirstName = '';
    this.newLastName = '';
    this.newEmail = '';
  }

}

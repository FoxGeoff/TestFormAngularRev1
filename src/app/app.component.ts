import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { User } from './users-table/users-table.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestFormAngularRev1';
  userList: User[] = [];

  // table ref
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  constructor() {
    // Debug- start test data
    this.userList = [
      { firstName: 'geoff', lastName: 'fox', email: 'geoff@computer.com' },
      { firstName: 'joanna', lastName: 'fox', email: 'jo@computer.com' }
    ];

    //debug code
    console.log(`Constructor() AppComponent:`, this.userList)
  }

  onUserAdded(userList: { firstName: string, lastName: string, email: string }) {
    this.userList.push({
      firstName: userList.firstName,
      lastName: userList.lastName,
      email: userList.email
    });

    //debug code
    console.log(`onUserAdded() AppComponent:`, this.userList)
  }
}

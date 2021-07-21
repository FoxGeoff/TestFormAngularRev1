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
  dataSource: User[] = [];

  constructor() { }

  onUserAdded(dataSource: { firstName: string, lastName: string, email: string }) {
    this.dataSource.push({
      firstName: dataSource.firstName,
      lastName: dataSource.lastName,
      email: dataSource.email
    });
    //debug code
    console.log(this.dataSource);
  }
}

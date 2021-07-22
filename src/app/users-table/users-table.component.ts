export interface User {
  firstName: string;
  lastName: string;
  email: string
}

import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit, AfterViewInit {

  // https://angular.io/guide/component-interaction#intercept-input-property-changes-with-a-setter
  private _userData: User[];
  @Input('userData')
  set userData(value: User[]) {
    this._userData = value;
    console.log(`set userdata`, this._userData)
    addTableRow( this._userData[this._userData.length-1])
  }
  get userData(): User[] { return this._userData; }

  // Mat Table properties
  displayedColumns: string[] = ['firstName', 'lastName', 'email'];
  dataSource = this.userData;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  constructor() {
    // console.log(`constructor(), UsersTableComponent `, this.dataSource);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource = this.userData;
    // this.table.renderRows();
  }

}
// TODO use async code FIX REQUIRED!!!
function addTableRow(user: User) {
  // debug code
  console.log(`addTableRow(): `, user)

  this.dataSource.push(user.firstName, user.lastName, user.email);
  this.table.renderRows();
}


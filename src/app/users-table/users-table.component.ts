export interface User {
  firstName: string;
  lastName: string;
  email: string
}

const USER_DATA: User[] = [
  { firstName: 'geoff', lastName: 'fox', email: 'geoff@computer.com' },
  { firstName: 'joanna', lastName: 'fox', email: 'jo@computer.com' }
]

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  // Mat Table properties
  displayedColumns: string[] = ['firstName', 'lastName', 'email'];
  dataSource = USER_DATA;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  constructor() { }

  ngOnInit(): void {
  }

}

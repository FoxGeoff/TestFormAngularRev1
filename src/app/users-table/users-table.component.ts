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
  @Input() userData!: User[];

  // Mat Table properties
  displayedColumns: string[] = ['firstName', 'lastName', 'email'];
  dataSource = this.userData;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  constructor() {
    console.log(`constructor(), UsersTableComponent `, this.userData);

  }

  ngOnInit(): void {
    console.log(`ngOnInit(), UsersTableComponent `, this.userData);
  }



  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit(), UsersTableComponent `, this.userData);
    this.dataSource = this.userData;
  }



}

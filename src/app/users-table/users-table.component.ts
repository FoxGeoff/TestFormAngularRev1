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
  @Input('userData') dataSource!: User[];

  // Mat Table properties
  displayedColumns: string[] = ['firstName', 'lastName', 'email'];
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  constructor() {
    // console.log(`constructor(), UsersTableComponent `, this.dataSource);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // this.table.renderRows();
  }

}

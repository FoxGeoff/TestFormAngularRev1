import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // broadcast to parent component, of type EvenEmitter<{...}>() to raise constructor method on the obj
  @Output() userCreated = new EventEmitter<{ firstName: string, lastName: string, email: string }>();


  newFirstName: string = '';
  newLastName: string = '';
  newEmail: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddUser() {
    /* WAS onSave(): this.dataSource.push({ firstName: this.newFirstName, lastName: this.newLastName, email: this.newEmail });
    this.table.renderRows();
    */
    this.userCreated.emit({ firstName: this.newFirstName, lastName: this.newLastName, email: this.newEmail });
  }

  onCancel() {
    this.newFirstName = '';
    this.newLastName = '';
    this.newEmail = '';
  }
}

# TestFormAngularRev1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

## Kanban Task: built the form and table in html

### Task: Build an html user form and users table template

### Task: Add Angular Material Components

1. Run ```ng add @angular/material```
2. Add material module or add to app.module
3. Ref. <https://material.angular.io/guide/getting-started>
4. Add: to app.module '@angular/forms' and imports: FormsModule (for template style form and ```[(ngModel)]```)

### Task: Add Material module

## NOTE in material module use import: [], export: []

1. This is a fix if the components are not displaying

### Task: Add Angular flex layout

1. ref <https://github.com/angular/flex-layout>
2. run ```npm i -s @angular/flex-layout @angular/cdk```
3. add to app.module ```import { FlexLayoutModule } from '@angular/flex-layout';``
4. Restart server

### Task: Add mat components for Users Table

1. NOTE: use to add record to table:
2. Reference Code <https://github.com/FoxGeoff/material-table-inline-ops>

```TypeScript
@ViewChild(MatTable, { static: true }) table: MatTable<any>;
...
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
  ```

### Task: Setup two components as parent and child

1. Parent - Dashboard - User form to add a new user
2. Child - UsersTable - Users table to list all users
3. app.component - Aggregates Dashboard(form to add user) and UsersTable components.

4. Ref video for debuging ANgular <https://app.pluralsight.com/library/courses/play-by-play-angular-design-solutions/table-of-contents>

### Task: Add  ```@Output() userCreated = new EventEmitter<{firstName: string lastName: string, email: string }>();```

1. ```<app-dashboard (userCreated)="onUserAdded($event)"></app-dashboard>```

### Task: Add ```@Input() userData!: User[];```

### Task: TODO **IMPORTANT**

```typescript
// TODO use async code FIX REQUIRED!!! on user-table.component
function addTableRow(user: User) {
  // debug code
  console.log(`addTableRow(): `, user)

  this.dataSource.push(user.firstName, user.lastName, user.email);
  this.table.renderRows();
}
```

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestFormAngularRev1';
  firstName!: string;
  lastName!: string;
  email!:string;

  constructor() {

  }

  onSave() {

  }

  onCancel() {
    
  }
}

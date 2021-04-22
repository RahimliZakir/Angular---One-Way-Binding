import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-OneWayBinding';
  content: string = "One Way Binding";
  centerIt: string = "center";
  changeColorToRed: string;
  sizeOfFont:string;

  constructor() {
    this.changeColorToRed = "red";
    this.sizeOfFont = "2rem";
  }
}

import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  template: ` <div>Username: {{ username }}</div>
  <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p>
  <label for="framework">Favorite Framework:
  <input id="framework" type="text" [(ngModel)]="favoriteFramework"></label>
  <button (click)="showFramework()">Show Framework</button>`,
  imports: [FormsModule],
})
export class User {
  username = 'youngTech';
  favoriteFramework = '';

  showFramework() {
    alert(this.favoriteFramework);
  }
}

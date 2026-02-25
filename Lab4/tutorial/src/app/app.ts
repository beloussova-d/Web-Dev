// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
//
// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App {
//   protected readonly title = signal('tutorial');
// }



// import {Component} from '@angular/core';
//
// @Component({
//   selector: 'app-root',
//   template: ` Hello Universe `,
//   styles: `
//     :host {
//       color: #a144eb;
//     }
//   `,
// })
// export class App {}



// import {Component} from '@angular/core';

// @Component({
//   selector: 'app-user',
//   template: ` Username: {{ username }} `,
// })
// export class User {
//   username = 'youngTech';
// }
//
// @Component({
//   selector: 'app-root',
//   template: `
//     <section>
//       <app-user />
//     </section>
//   `,
//   imports: [User],
// })
// export class App {}


// import {Component, input} from '@angular/core';
// import {User} from './user';
//
// @Component({
//   selector: 'app-root',
  // template: ` @if (isServerRunning) {
  //   <span>Yes, the server is running</span>
  // } @else {
  //   <span>No, the server is not running</span>
  // } `,

  // template: `
  // @for (user of users; track user.id) {
  //   <p>{{user.name}}</p>
  // }`,

  // styleUrls: ['app.css'],
  // template: ` <div [contentEditable]=isEditable></div> `,

  // template: `
  //   <section (mouseover)="showSecretMessage()" (mouseleave)="hideSecretMessage()">
  //     There's a secret message for you, hover to reveal 👀
  //     {{ message }}
  //   </section>
  // `

//   template: ` <app-user name="Simran" /> `,
//   imports: [User],
// })
// export class App {
  // isServerRunning = true;

  // users = [
  //   {id: 0, name: 'Sarah'},
  //   {id: 1, name: 'Amy'},
  //   {id: 2, name: 'Rachel'},
  //   {id: 3, name: 'Jessica'},
  //   {id: 4, name: 'Poornima'},
  // ];

  // isEditable = true;

  // message = '';
  // showSecretMessage() {
  //   this.message = 'Way to go 🚀';
  // }
  // hideSecretMessage() {
  //   this.message = '';
  // }
// }


// import {Component} from '@angular/core';
// import {Child} from './child';
//
// @Component({
//   selector: 'app-root',
//   template: `<app-child (addItemEvent)="addItem($event)"/>
//   <p>🐢 all the way down {{items.length}}</p>`,
//   imports: [Child],
// })
// export class App {
//   items = new Array();
//   addItem(item: string) {
//     this.items.push(item);
//   }
// }

// import {Component} from '@angular/core';
// import {Comments} from './comments';
//
// @Component({
//   selector: 'app-root',
//   template: `<div>
//     <h1>How I feel about Angular</h1>
//     <article>
//       <article>I'm in misery. Send help. Ok kidding (maybe).</article>
//       <p>
//         Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
//         feature that makes defer loading content the easiest and most ergonomic it could possibly be.
//         The Angular community is also filled with amazing contributors and experts that create excellent
//         content. The community is welcoming and friendly, and it really is the best community out there.
//       </p>
//       <p>
//         I can't express enough how much I enjoy working with Angular. It offers the best developer
//         experience I've ever had. I love that the Angular team puts their developers first and takes
//         care to make us very happy. They genuinely want Angular to be the best framework it can be, and
//         they're doing such an amazing job at it, too. This statement comes from my heart and is not at
//         all copied and pasted. In fact, I think I'll say these exact same things again a few times.
//       </p>
//       <p>
//         Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
//         feature that makes defer loading content the easiest and most ergonomic it could possibly be.
//         The Angular community is also filled with amazing contributors and experts that create excellent
//         content. The community is welcoming and friendly, and it really is the best community out there.
//       </p>
//       <p>
//         I can't express enough how much I enjoy working with Angular. It offers the best developer
//         experience I've ever had. I love that the Angular team puts their developers first and takes
//         care to make us very happy. They genuinely want Angular to be the best framework it can be, and
//         they're doing such an amazing job at it, too. This statement comes from my heart and is not at
//         all copied and pasted. In fact, I think I'll say these exact same things again a few times.
//       </p>
//       <p>
//         Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
//         feature that makes defer loading content the easiest and most ergonomic it could possibly be.
//         The Angular community is also filled with amazing contributors and experts that create excellent
//         content. The community is welcoming and friendly, and it really is the best community out there.
//       </p>
//       <p>
//         I can't express enough how much I enjoy working with Angular. It offers the best developer
//         experience I've ever had. I love that the Angular team puts their developers first and takes
//         care to make us very happy. They genuinely want Angular to be the best framework it can be, and
//         they're doing such an amazing job at it, too. This statement comes from my heart and is not at
//         all copied and pasted.
//       </p>
//       <p>
//         Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
//         feature that makes defer loading content the easiest and most ergonomic it could possibly be.
//         The Angular community is also filled with amazing contributors and experts that create excellent
//         content. The community is welcoming and friendly, and it really is the best community out there.
//       </p>
//       <p>
//         I can't express enough how much I enjoy working with Angular. It offers the best developer
//         experience I've ever had. I love that the Angular team puts their developers first and takes
//         care to make us very happy. They genuinely want Angular to be the best framework it can be, and
//         they're doing such an amazing job at it, too. This statement comes from my heart and is not at
//         all copied and pasted.
//       </p>
//     </article>
//     @defer (on viewport) {
//       <comments />
//     } @placeholder {
//       <p>Future comments</p>
//     } @loading (minimum 2s) {
//       <p>Loading comments...</p>
//     }
//     </div>`,
//   imports: [Comments],
// })
// export class App {
//
// }

// import {Component} from '@angular/core';
// import {RouterLink, RouterOutlet} from '@angular/router';
//
// @Component({
//   selector: 'app-root',
//   template: `
//     <nav>
//       <a routerLink="/">Home</a>
//       |
//       <a routerLink="/user">User</a>
//     </nav>
//     <router-outlet></router-outlet>
//   `,
//   imports: [RouterLink, RouterOutlet],
// })
// export class App {}

// import {Component} from '@angular/core';
// import {ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';
//
// @Component({
//   selector: 'app-root',
//   template: `
//     <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
//       <label>
//         Name
//         <input type="text" formControlName="name" />
//       </label>
//       <label>
//         Email
//         <input type="email" formControlName="email" />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//
//     <h2>Profile Form</h2>
//     <p>Name: {{profileForm.value.name}}</p>
//     <p>Email: {{profileForm.value.email}}</p>
//   `,
//   imports: [ReactiveFormsModule],
// })
// export class App {
//   profileForm = new FormGroup({
//     name: new FormControl(''),
//     email: new FormControl(''),
//   })
//
//   handleSubmit() {
//     alert(
//       this.profileForm.value.name + ' | ' + this.profileForm.value.email
//     );
//   }
// }


// import {Component, inject} from '@angular/core';
// import {CarService} from './car.service';
//
// @Component({
//   selector: 'app-root',
//   template: ` <p>Car Listing: {{ display }}</p> `,
// })
// export class App {
//   carService = inject(CarService);
//   display = this.carService.getCars().join(' ⭐️ ');
// }

// import {Component} from '@angular/core';
// import {UpperCasePipe} from '@angular/common';
//
// @Component({
//   selector: 'app-root',
//   template: ` {{ username | uppercase }} `,
//   imports: [UpperCasePipe],
// })
// export class App {
//   username = 'yOunGTECh';
// }

// import {Component} from '@angular/core';
// import {DecimalPipe, DatePipe, CurrencyPipe} from '@angular/common';
//
// @Component({
//   selector: 'app-root',
//   template: `
//     <ul>
//       <li>Number with "decimal" {{ num | number: '3.2-2'}}</li>
//       <li>Date with "date" {{ birthday | date: 'medium'}}</li>
//       <li>Currency with "currency" {{ cost | currency}}</li>
//     </ul>
//   `,
//   imports: [DecimalPipe, DatePipe, CurrencyPipe],
// })
// export class App {
//   num = 103.1234;
//   birthday = new Date(2023, 3, 2);
//   cost = 4560.34;
// }

import {Component} from '@angular/core';
import {ReversePipe} from './reverse.pipe';

@Component({
  selector: 'app-root',
  template: ` Reverse Machine: {{ word | reverse }} `,
  imports: [ReversePipe],
})
export class App {
  word = 'You are a champion';
}



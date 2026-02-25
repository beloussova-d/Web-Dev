import { Routes } from '@angular/router';
import {Home} from './home/home';
import {User} from './user/user';

export const routes: Routes = [
  {path: '', component: Home, title: 'App Home Page'},
  {path: 'user', component: User, title: 'App User Page'},
];

import { Injectable } from '@angular/core';
import { UserForRegister } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

constructor() { }

addUser(user: UserForRegister) {
  let users= [];
  const storedUsers = localStorage.getItem('Users');

  if (storedUsers) {
    try {
      users = JSON.parse(storedUsers);

      if (!Array.isArray(users)) {
        users = [];
      }
    } catch (error) {
      console.error('Error parsing stored users:', error);
      users = [];
    }
    users = [user, ...users];
  }
  else{
    users=[user];
  }

  
  localStorage.setItem('Users', JSON.stringify(users));
}

}

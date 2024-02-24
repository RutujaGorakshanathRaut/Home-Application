import { Injectable } from '@angular/core';
import { UserForRegister, UserForLogin } from '../model/user';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http: HttpClient) { }
/*
authUser(user : any){
  let UserArray=[];
  const storedUsers = localStorage.getItem('Users');
  if(storedUsers)
  {
    UserArray=JSON.parse(storedUsers);
  }
  return UserArray.find((p: { userName: any; password: any; }) => {
    return p.userName === user.userName && p.password === user.password;
  });
}
*/

authUser(user: UserForLogin) {
  return this.http.post('https://localhost:44342/api/account/login', user);
}

registerUser(user: UserForRegister) {
  return this.http.post('https://localhost:44342/api/account/register', user);
}

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AlertyfyService } from '../../services/alertyfy.service';
import { Route, Router } from '@angular/router';
import { UserForLogin } from '../../model/user';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService,
    private alertify: AlertyfyService,
    private router: Router) { }

  ngOnInit() {
  }
/*
  onLogin(loginForm: NgForm )
  {
    console.log(loginForm.value);
    const token=this.authService.authUser(loginForm.value);
    if(token)
    {
      
      localStorage.setItem('Token', token.userName)
      
      this.alertify.success('Login Successful...... !!!!!');
      this.router.navigate(['/']);
    }
    else{
      this.alertify.error('User Name or Password Incorrect ...!!');
      
    }

  }
  */
 onLogin(loginForm: NgForm) {
        console.log(loginForm.value);
 // const token = this.authService.authUser(loginForm.value);
 this.authService.authUser(loginForm.value).subscribe(
  (response: UserForLogin) => {
      console.log(response);
      const user = response;
      if (user) {
          localStorage.setItem('token', user.token);
          localStorage.setItem('userName', user.userName);
          this.alertify.success('Login Successful');
          this.router.navigate(['/']);
      }
  },
  (error) => {
      console.log(error);
      this.alertify.error(error.error);
  }
);
}

}

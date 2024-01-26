import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AlertyfyService } from '../../services/alertyfy.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService,
    private alertify: AlertyfyService,
    private router: Router) { }

  ngOnInit() {
  }

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

}

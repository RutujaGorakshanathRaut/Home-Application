import { Component, OnInit } from '@angular/core';
import { AlertyfyService } from '../services/alertyfy.service';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

    loggedinUser: any;
    constructor(private alertify: AlertyfyService) { }

    ngOnInit() {
    }

    loggedin() {
        this.loggedinUser =  localStorage.getItem('Token');
        if(this.loggedinUser)
        {
            return true;
        }
        else{
            return false;
        }
    }

    onLogout() {
        localStorage.removeItem('Token');
        localStorage.removeItem('userName');
        this.alertify.success('You are logged out !');
    }

}

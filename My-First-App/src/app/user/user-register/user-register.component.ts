import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators , ValidationErrors, ValidatorFn, AbstractControl, FormBuilder } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../model/user';
import { AlertyfyService } from '../../services/alertyfy.service';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registertionForm: FormGroup |any;
// FormBuilder ==> it is helper class provided by angular which make it easier to biuld reactive form
 user!: User;
 userSubmitted = false;
  constructor(private fb: FormBuilder ,
     private userService : UserServiceService,
     private alertyfy : AlertyfyService
     ) {

   }
 ngOnInit() {
    // this.registerationForm = new FormGroup({
    //   userName: new FormControl(null, Validators.required),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    //   confirmPassword: new FormControl(null, [Validators.required]),
    //   mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    // }, this.passwordMatchingValidatior);
        this.createRegisterationForm();
    // this.registerationForm.controls['userName'].setValue('Default Value');
    }

    createRegisterationForm() {
        this.registertionForm =  this.fb.group({
            userName: [null, Validators.required],
            email: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required, Validators.minLength(8)]],
            confirmPassword: [null, Validators.required],
            mobile: [null, [Validators.required, Validators.maxLength(10)]]
        }, {validators: this.passwordMatchingValidatior});
    }

    passwordMatchingValidatior(fg: FormGroup): Validators {
        return fg.get('password')?.value === fg.get('confirmPassword')?.value ? "" :
            {notmatched: true};
    }


//getterr method for all form Controls

  get userName(){
    return this.registertionForm.get('userName') as FormControl;
  }

  get email(){
    return this.registertionForm.get('email') as FormControl;
  }

  get password(){
    return this.registertionForm.get('password') as FormControl;
  }

  get confirmPassword(){
    return this.registertionForm.get('confirmPassword') as FormControl;
  }

  get mobile(){
    return this.registertionForm.get('mobile') as FormControl;
  }




  onSubmit(){
    this.userSubmitted = true;
    console.log(this.registertionForm.value);
    if(this.registertionForm.valid)
    {
      
      //this.user = Object.assign(this.userData());
    //localStorage.setItem('Users', JSON.stringify(this.user));
      this.userService.addUser(this.userData());
      this.registertionForm.reset();
      this.userSubmitted=false;
      this.alertyfy.success('Congrats , You Registered ....!!!!!!!');
    }
    else{
      this.alertyfy.error('OOooopppsss try again ....!!!!!!!');
    
    }
  }

  userData():User{
    return this.user={
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }
  
}

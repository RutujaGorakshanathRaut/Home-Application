import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
 
  @ViewChild('Form') addPropertyForm:NgForm | any;
  @ViewChild('formTabs') formTabs: TabsetComponent | any;

  propertyTypes: Array<string>=['House' , ' Appartment ' , ' Duplex']
  furnishTypes: Array<string>=['Semi ' , ' Fully ', ' Unfurnished']

  propertyView : IProperty ={
    Id:0,
    Name:'',
    Price:0,
    SellRent:0,
    Type:''
  };

  constructor(private router : Router) { }

  ngOnInit() {
  }

  onBack()
  {
    this.router.navigate(['/']);
  }

  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }
onSubmit(Form : NgForm)
{
  console.log('Form Submitted');
  console.log(this.addPropertyForm);
}

}

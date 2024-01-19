




import { Component , Input, OnInit} from "@angular/core";
import { IProperty } from "../IProperty.interface";


@Component({
    selector:'app-property-card',
    //template: '<h1> I am card </h1>',
    templateUrl:'property-card.components.html',
     styleUrls:['property-card.components.css']
})



export class PropertyCardComponent{

   constructor() {
      this.property = {} as IProperty; // You can initialize with default values or an empty object based on your application's requirements.
  }
   @Input() property : IProperty;



}









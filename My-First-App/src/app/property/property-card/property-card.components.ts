




import { Component , Input, OnInit} from "@angular/core";

@Component({
    selector:'app-property-card',
    //template: '<h1> I am card </h1>',
    templateUrl:'property-card.components.html',
     styleUrls:['property-card.components.css']
})



export class PropertyCardComponent{

   @Input() property :any



}









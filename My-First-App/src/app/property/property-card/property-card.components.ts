




import { Component } from "@angular/core";

@Component({
    selector:'app-property-card',
    //template: '<h1> I am card </h1>',
    templateUrl:'property-card.components.html',
     styleUrls:['property-card.components.css']
})









export class PropertyCardComponent{

    Property : any={
        "Id":1,
        "Name":"House1",
        "Type":"House",
        "Price":1000

    }

}









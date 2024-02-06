




import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HousingService } from "../../services/housing.service";
import { ActivatedRoute } from "@angular/router";
import { IPropertyBase } from "../../model/ipropertybase";
import { IProperty } from "../../model/iproperty";


@Component({
    selector:'app-property-list',
    //template: '<h1> I am card </h1>',
    templateUrl:'property-list.component.html',
     styleUrls:['property-list.component.css']
})



export class PropertyListComponent implements OnInit{

    properties: Array<IPropertyBase> =[];
    SellRent=1;
    Today = new Date();
    City = '';
    SearchCity = '';
    SortbyParam = '';
    SortDirection = 'asc';
    
   constructor(private route : ActivatedRoute, private housingService: HousingService){}

    ngOnInit(): void {
       if(this.route.snapshot.url.toString()){
        this.SellRent=2; // we are rent page url
       }
        this.housingService.getAllProperties(this.SellRent).subscribe(
            data=>{
                this.properties=data;
                
                console.log(data);
                console.log(this.route.snapshot.url.toString());
                
                } ,error => {
                    console.log('httperror : ');
                    console.log(error);
                }
        );
        /*
        this.http.get('data/properties.json').subscribe(
            
            data=>{
            this.properties=data;
            console.log(data)
            }
        );
        */
    }

    onCityFilter() {
        this.SearchCity = this.City;
      }
    
      onCityFilterClear() {
        this.SearchCity = '';
        this.City = '';
      }
    
      onSortDirection() {
        if (this.SortDirection === 'desc') {
          this.SortDirection = 'asc';
        } else {
          this.SortDirection = 'desc';
        }
      }

}




















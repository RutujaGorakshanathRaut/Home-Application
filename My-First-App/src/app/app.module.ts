import { BrowserModule } from "@angular/platform-browser";
import {  NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { PropertyCardComponent } from "./property/property-card/property-card.components";
import { PropertyListComponent } from "./property/property-list/property-list.component";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from "@angular/common/http";
import { HousingService } from "./services/housing.service";
import { Route,RouterModule, Routes } from "@angular/router";
import { AddPropertyComponent } from "./property/add-property/add-property.component";
import { PropertyDetailsComponent } from "./property/property-details/property-details.component";
import { FormsModule } from "@angular/forms";


const appRoutes: Routes=[
    {path: '', component: PropertyListComponent},
    {path: 'rent-property', component: PropertyListComponent},
    {path : 'add-property' , component: AddPropertyComponent},
    {path : 'property-detail/:id' , component: PropertyDetailsComponent},
    {path: '**', component: PropertyListComponent},
   
]





@NgModule({
    declarations:[	
        AppComponent,
        PropertyCardComponent,
        PropertyListComponent,
        PropertyDetailsComponent,
        AddPropertyComponent,
      NavBarComponent
   ],
    imports:[
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers:[
        HousingService
    ],
    bootstrap:[AppComponent]
})

export class AppModule{}





















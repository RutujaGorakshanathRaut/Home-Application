import { BrowserModule } from "@angular/platform-browser";
import {  NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { PropertyCardComponent } from "./property/property-card/property-card.components";
import { PropertyListComponent } from "./property-list/property-list.component";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from "@angular/common/http";
import { HousingService } from "./services/housing.service";
@NgModule({
    declarations:[	
        AppComponent,
        PropertyCardComponent,
        PropertyListComponent,
      NavBarComponent
   ],
    imports:[
        BrowserModule,
        HttpClientModule
    ],
    providers:[
        HousingService
    ],
    bootstrap:[AppComponent]
})

export class AppModule{}





















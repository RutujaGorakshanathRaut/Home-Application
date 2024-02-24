import { BrowserModule } from "@angular/platform-browser";
import {  NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { PropertyCardComponent } from "./property/property-card/property-card.components";
import { PropertyListComponent } from "./property/property-list/property-list.component";
import { HttpClientModule } from "@angular/common/http";
import { HousingService } from "./services/housing.service";
import { Route,RouterModule, Routes } from "@angular/router";
import { AddPropertyComponent } from "./property/add-property/add-property.component";
import { PropertyDetailsComponent } from "./property/property-details/property-details.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserRegisterComponent } from "./user/user-register/user-register.component";
import { UserLoginComponent } from "./user/user-login/user-login.component";

import { AlertyfyService } from "./services/alertyfy.service";
import { AuthService } from "./services/auth.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PropertyDetailResolverService } from "./property/property-details/property-detail-resolver.service";
import { SortPipe } from "./Pipes/sort.pipe";
import { FilterPipe } from "./Pipes/filter.pipe";


const appRoutes: Routes=[
    {path: '', component: PropertyListComponent},
    {path: 'rent-property', component: PropertyListComponent},
    {path : 'add-property' , component: AddPropertyComponent},
    {path: 'property-detail/:id',
    component: PropertyDetailsComponent,
    resolve: {prp: PropertyDetailResolverService}},{path: 'user/login', component:UserLoginComponent},
    {path:'user/register', component:UserRegisterComponent},


    {path: '**', component: PropertyListComponent},
    
]





@NgModule({
    declarations:[	
        AppComponent,
        PropertyCardComponent,
        PropertyListComponent,
        NavBarComponent,
        PropertyDetailsComponent,
        AddPropertyComponent,
        UserRegisterComponent,
        UserLoginComponent,
        FilterPipe,
        SortPipe
        
       
   ],
    imports:[
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),
        BrowserAnimationsModule,
        BsDropdownModule.forRoot(),
        TabsModule.forRoot(),
        ButtonsModule.forRoot(),
        BsDatepickerModule.forRoot(),
    ],
    providers:[
        HousingService,
        AlertyfyService,
        AuthService,
        PropertyDetailResolverService
    ],
    bootstrap:[AppComponent]
})

export class AppModule{}





















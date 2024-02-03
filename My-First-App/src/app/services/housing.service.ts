import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IPropertyBase } from '../model/ipropertybase';
import { IProperty } from '../model/iproperty';
import { Property } from '../model/property';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http: HttpClient) { }
  
  getAllProperties(SellRent:number): Observable<IProperty[]>{
    return this.http.get('data/properties.json').pipe(
      map((data: any) =>{
        const propertiesArray:Array<IProperty>=[];
        for(const id in data)
        {
          if(data.hasOwnProperty(id) && data[id].SellRent=== SellRent)
          {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );         
    
  }

  addProperty(property: Property) {
    localStorage.setItem('newProp', JSON.stringify(property));
  }

}

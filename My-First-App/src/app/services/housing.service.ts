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
  
getProperty(id: number) {
  return this.getAllProperties().pipe(
    map(propertiesArray => {
      return propertiesArray.find(p => p.Id === id);
    })
  );
}

getAllProperties(SellRent?: number): Observable<IPropertyBase[]> {
    return this.http.get('data/properties.json').pipe(
      map((data: any) =>{
        const propertiesArray:Array<IProperty>=[];
        const localProperties = JSON.parse(localStorage.getItem('newProp')?? '');

        if (localProperties) {
          for (const id in localProperties) {
            if (SellRent) {
            if (localProperties.hasOwnProperty(id) && localProperties[id].SellRent === SellRent) {
              propertiesArray.push(localProperties[id]);
            }
          } else {
            propertiesArray.push(localProperties[id]);
          }
          }
        }
        for(const id in data)
        {
          if (SellRent) {
            if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
              propertiesArray.push(data[id]);
            }
            } else {
              propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );         
    
  }

  addProperty(property: Property) {
    let newProp = [property];

    // Add new property in array if newProp alreay exists in local storage
    if (localStorage.getItem('newProp')) {
      newProp = [property,
                  ...JSON.parse(localStorage.getItem('newProp')?? '')];
    }

    localStorage.setItem('newProp', JSON.stringify(newProp));
  }

  newPropID() {
    const storedPID = localStorage.getItem('PID');
  
    if (storedPID) {
      var incrementedPID = String(+storedPID + 1);
      localStorage.setItem('PID', incrementedPID);
      return +incrementedPID;
    } else {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }

}

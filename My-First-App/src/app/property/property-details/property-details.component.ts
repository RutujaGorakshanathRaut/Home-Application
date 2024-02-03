import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { HousingService } from '../../services/housing.service';
import { Property } from '../../model/property';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
public properyId: number | any ;

property = new Property();

constructor(private route: ActivatedRoute,
            private router: Router,
            private housingService: HousingService) { }

    ngOnInit() {
          this.properyId = +this.route.snapshot.params['id'];
          
          this.route.params.subscribe(
          (params) => {
          this.properyId = +params['id'];
          this.housingService.getProperty(this.properyId).subscribe(
          (data: Property| any) => {
               this.property = data;
              }
            );
           }
         );
          
        }  

}

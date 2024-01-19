import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
public properyId: number | undefined ;

  constructor( private route : ActivatedRoute , private router: Router) { }

  ngOnInit() {
    // Ensure that the propertyId is always defined before using it

    this.properyId = this.route.snapshot.params['id'] ? +this.route.snapshot.params['id'] : undefined;
    this.route.params.subscribe(
      (params)=>{
        this.properyId= + params['id'];
      }
    )
  }

  onSelectNext(){
    // Check if propertyId is defined before incrementing

    if (this.properyId !== undefined) {

      // Use a conditional check to increment or provide a default value

      this.properyId = this.properyId + 1 || 1;
    this.router.navigate(['property-detail', this.properyId]);
      
    
  
  }
    
  }

}

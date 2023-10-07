import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BikeService } from 'src/app/services/bike.service';
import { Bike } from 'src/app/shared/models/Bike';
import  {CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-bikepage',
  templateUrl: './bikepage.component.html',
  styleUrls: ['./bikepage.component.css']
})
export class BikepageComponent implements OnInit {
  bike: Bike | undefined; // Provide an initial value of undefined

  constructor(
    private activatedRoute: ActivatedRoute,
    private bikeservices: BikeService,
    private CartService:CartService,
    private router: Router,
  ) {}

  async ngOnInit(): Promise<void> {
    this.activatedRoute.params.subscribe(async (params) => {
      if (params['id']) {
        const bike = await this.bikeservices.getAllbyid(params['id']);
        if (bike) {
          this.bike = bike; // Assign the value only if it's not undefined
        } else {
          console.log(" yoo error")
          // Handle the case where bike is undefined, e.g., redirect or show an error
        }
      }
      else{
        console.log(" yoo error 11")

      }
    });
  }


  addToCart(){

    console.log("selected")
   if(this.bike)
    { this.CartService.addToCart(this.bike);}
    this.router.navigateByUrl('/cart-page');
  }
}

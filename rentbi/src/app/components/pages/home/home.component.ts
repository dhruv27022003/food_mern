import { Component } from '@angular/core';
import { BikeService } from 'src/app/services/bike.service';
import { Bike } from 'src/app/shared/models/Bike';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
// export class HomeComponent {
//   Bikes: Bike[] = [];

//   constructor(private Bikeservice: BikeService) {}

//   async ngOnInit(): Promise<void> {
//     // this.activatedRoute.params.subscribe(async (params) => {
//     try {
//       this.Bikes = await this.Bikeservice.getall();
//     } catch (error) {
//       console.error("Error fetching data", error);
//     }
//   }
// }

// export class HomeComponent implements OnInit {
//   bikes: Bike[] = [];

//   constructor(private fs: BikeService, private route: ActivatedRoute) { }

//   ngOnInit(): void {
//     this.route.params.subscribe(params => {
//       if (params['tag']) {
//         this.bikes = this.fs.getAllbikebytag(params['tag']);
//       } else {
//         this.bikes = this.fs.getall();
//       }
//     });
//   }
// }



export class HomeComponent {
  Bikes: Bike[] = [];

  constructor(private Bikeservice: BikeService, 
    private activatedRoute: ActivatedRoute,
    ) {}

  async ngOnInit(): Promise<void> {
    this.activatedRoute.params.subscribe(async (params) => {
    try {
      if (params['tag']) {
                this.Bikes =await this.Bikeservice.getAllbikebytag(params['tag']);
              }
      else{
      this.Bikes = await this.Bikeservice.getall();}
      console.log("mann ", this.Bikes)
    } catch (error) {
      console.error("Error fetching data", error);
    }
    console.log("mann ", this.Bikes)
  }
);
}}
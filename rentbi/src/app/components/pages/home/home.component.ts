import { Component } from '@angular/core';
import { BikeService } from 'src/app/services/bike.service';
import { Bike } from 'src/app/shared/models/Bike';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Bikes: Bike[] = [];

  constructor(private Bikeservice: BikeService) {}

  async ngOnInit(): Promise<void> {
    try {
      this.Bikes = await this.Bikeservice.getall();
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }
}


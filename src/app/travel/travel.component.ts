import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})

export class TravelComponent implements OnInit {
  numberOfTravelers: number = 0;
  result: number = 0;
  costOfTrip: number = 150;
  constructor()
  {
  }
  ngOnInit(): void
  {}
  travelCost(): void{
    this.result = this.numberOfTravelers * this.costOfTrip;

}
}

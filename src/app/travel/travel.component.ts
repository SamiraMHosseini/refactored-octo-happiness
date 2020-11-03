import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  numberOfTravelers: number = 0;
  // tslint:disable-next-line: no-inferrable-types
  result: number = 0;
  // tslint:disable-next-line: no-inferrable-types
  costOfTrip: number = 150;
  constructor() { }

  ngOnInit(): void {
  }
  travelCost(): void{
    this.result = this.numberOfTravelers * this.costOfTrip;

}

}

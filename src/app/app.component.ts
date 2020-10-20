import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: string = 'Samira Mohamadhoseini';
    numberOfTravelers: number = 0;
    result: number = 0;
    costOfTrip: number = 150;

    travelCost(): void{
      this.result = this.numberOfTravelers * this.costOfTrip;

    }


}


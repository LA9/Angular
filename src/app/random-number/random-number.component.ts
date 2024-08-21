import { Component } from '@angular/core';

@Component({
  selector: 'random-number',
  templateUrl: './random-number.component.html',
  styleUrl: './random-number.component.css'
})
export class RandomNumberComponent {

  randomNumber =0

  generateRandomNumber(){

    this.randomNumber= Math.floor(Math.random() * 1000);

    console.log(this.randomNumber);
  }
}

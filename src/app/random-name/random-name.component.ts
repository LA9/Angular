import { Component } from '@angular/core';

@Component({
  selector: 'random-name',
  templateUrl: './random-name.component.html',
  styleUrl: './random-name.component.css'
})
export class RandomNameComponent {

  randomName:string ="rashed"



  generateRandomName(){
    let names =["ahmed","omar","mohamed"]
    let randomNumber= Math.floor(Math.random() * 3);
    this.randomName = names[randomNumber]
    console.log(this.randomName);
  }
}

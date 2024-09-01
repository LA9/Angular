import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingsMessagesService {


  greetings1 = "Aslam alikom"
  greetings2 = "Good Morning"
  greetings3 = "Hello"
  greetings4 = "Hallo"
  greetings5 = "Namasate"
  greetings6 = "Khudafis"

  greetingsList = [
    this.greetings1 , this.greetings2 , this.greetings3 , this.greetings4, this.greetings5, this.greetings6
  ]

  constructor() { }

  displayGreetings(){
    console.log(this.greetings1);
    
  }
  displayRandomGreetings(){
    console.log(this.greetingsList[Math.floor(Math.random() * 6)]);
    
  }
}

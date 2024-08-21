import { Component } from '@angular/core';

@Component({
  selector: 'random-quote',
  templateUrl: './random-quote.component.html',
  styleUrl: './random-quote.component.css'
})
export class RandomQuoteComponent {



 
 


generateQuotes(){
 let quoteArray =["We are called to be architects of the future, not its victims.",
    "Do not allow watching food to replace making food.",
    "As long as people will accept crap, it will be financially profitable to dispense it.",
    "Though science can cause problems, it is not by ignorance that we will solve them.",
    "life is hard",
    "life is not easy"
  ]

  const randomNumber = Math.floor(Math.random() * 6);

  console.log(quoteArray[randomNumber]);
  
}
}

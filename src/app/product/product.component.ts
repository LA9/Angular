import { Component } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  product1 = {name:"watch", price :"1200KD" , color:"black" ,owner :{name:"ahmed", age:"26",hobby:"motorcyle"}}
  car:any = new Product("ferrari",50000000,"red")
  buttonClicked:number =0



   buyButtonOnClick(){
    this.buttonClicked +=1
    console.log(this.buttonClicked+" times clicked");
    
   }
}


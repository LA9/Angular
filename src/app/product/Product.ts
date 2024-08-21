export class Product {

     public name="" 
      price =0 
      color =""
    constructor(name:string, price:number, color:string){
        this.name =name
        this.price =price
        this.color =color
    
    }
    info(){
     return "name: "+this.name+" price: "+ this.price+" color: "+this.color   
    }
    
    }
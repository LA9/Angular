import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

  user:User = new User("ahmed","26","swimming")

}

export class User {
public name:string =""
public age:string =""
public hobby:string =""
  constructor(name:string ,age:string ,hobby:string){
this.age =age
this.name = name
this.hobby = hobby

  }
}
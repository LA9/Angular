import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrl: './zoo.component.css'
})
export class ZooComponent {

  @Input() massage:string =""

  // @Input() animal :string ="animal"
}

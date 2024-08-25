import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrl: './user1.component.css'
})
export class User1Component {

  @Input() firstName= ""
  @Input() secondName= ""
  @Input() job:string= ""
}

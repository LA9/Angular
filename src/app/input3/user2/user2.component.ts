import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrl: './user2.component.css'
})
export class User2Component {
  @Input() firstName= ""
  @Input() secondName= ""
  @Input() job= ""
}

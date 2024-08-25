import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user3',
  templateUrl: './user3.component.html',
  styleUrl: './user3.component.css'
})
export class User3Component {
  @Input() firstName= ""
  @Input() secondName= ""
  @Input() job= ""
}

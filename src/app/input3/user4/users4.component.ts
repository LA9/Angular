import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user4',
  templateUrl: './users4.component.html',
  styleUrl: './users4.component.css'
})
export class Users4Component {
  @Input() firstName= ""
  @Input() secondName= ""
  @Input() job= ""
}

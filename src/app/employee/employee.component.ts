import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee-service.service';
import { GreetingsMessagesService } from '../services/greetings-messages.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {



constructor(
  public employeeService:EmployeeService,
  public greetingsService:GreetingsMessagesService

){
}


 

}

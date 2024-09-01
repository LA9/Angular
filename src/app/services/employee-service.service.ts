import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
 export  class EmployeeService {


  employeeList = [
    "Amina",
    "Omar",
    "Layla",
    "Zaid",
    "Fatima",
    "Khalid",
    "Nadia",
    "Samir",
    "Yasmin",
    "Hassan",
    "Sara",
    "Tariq",
    "Maya",
    "Rami",
    "Dalia"
];

  constructor() { }
}

import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  listEmployee: Employee[] = [
    {fullName: 'Oscar Yemha', email: 'oyemha@gmail.com', phone: 1122223333, sex: 'Male', entryDate: new Date(), maritalStatus: 'Single'},
    {fullName: 'Lucas Martínez', email: 'lmartinez@gmail.com', phone: 3512335522, sex: 'Male', entryDate: new Date(), maritalStatus: 'Single'},
    {fullName: 'María Funes', email: 'mfunes@gmail.com', phone: 1156688332, sex: 'Female', entryDate: new Date('2020-04-26'), maritalStatus: 'Married'},
  ]

  constructor() { }

  getEmployees(){
    return this.listEmployee.slice();
  }

  deleteEmployee(index: number){
    this.listEmployee.splice(index, 1);
  }
}

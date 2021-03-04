import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  listEmployee: Employee[] = [
    {fullName: 'Oscar Yemha', email: 'oyemha@gmail.com', phone: 1122223333, sex: 'Male', entryDate: new Date(), maritalStatus: 'Single'},
    {fullName: 'Lucas Martínez', email: 'lmartinez@gmail.com', phone: 3512335522, sex: 'Male', entryDate: new Date(), maritalStatus: 'Married'},
    {fullName: 'María Funes', email: 'mfunes@gmail.com', phone: 1156688332, sex: 'Female', entryDate: new Date('2020-04-26'), maritalStatus: 'Married'},
    {fullName: 'Juan Pérez', email: 'jperez@gmail.com', phone: 44441111, sex: 'Male', entryDate: new Date('2018-05-04'), maritalStatus: 'Divorced'},
    {fullName: 'Laura Martínez', email: 'lmartinez@gmail.com', phone: 1122223535, sex: 'Female', entryDate: new Date('2017-01-01'), maritalStatus: 'Divorced'},
    {fullName: 'María del Carmen Araya', email: 'mcaraya@gmail.com', phone: 53123456897, sex: 'Female', entryDate: new Date('2019-10-19'), maritalStatus: 'Single'},
  ]

  constructor() { }

  getEmployees(){
    return this.listEmployee.slice();
  }

  deleteEmployee(index: number){
    this.listEmployee.splice(index, 1);
  }

  addEmployee(employee: Employee){
    this.listEmployee.unshift(employee);
  }

  getEmployee(index: number){
    return this.listEmployee[index];
  }

  editEmployee(employee: Employee, idEmployee: number){
    this.listEmployee[idEmployee].fullName = employee.fullName;
    this.listEmployee[idEmployee].email = employee.email;
    this.listEmployee[idEmployee].entryDate = employee.entryDate;
    this.listEmployee[idEmployee].phone = employee.phone;
    this.listEmployee[idEmployee].maritalStatus = employee.maritalStatus;
    this.listEmployee[idEmployee].sex = employee.sex;
  }
}

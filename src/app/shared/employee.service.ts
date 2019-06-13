import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeList: AngularFireList<any>;
  selectedEmployee: Employee = new Employee();

  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.employeeList = this.firebase.list('employees');
    return this.employeeList;
  }

  insertEmployee(employee: Employee) {
    this.employeeList.push({
      name: employee.name,
      position: employee.position,
      office: employee.office,
      salary: employee.salary,

    });
  }

  updateEmployee(employee: Employee) {
    this.employeeList.update(employee.id, {
      name: employee.name,
      position: employee.position,
      office: employee.office,
      salary: employee.salary,

    });
  }

  deleteEmployee(id: string) {
    this.employeeList.remove(id);
  }
}

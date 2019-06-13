import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styles: []
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    const x = this.employeeService.getData();
    x.snapshotChanges().subscribe(item => {
      this.employeeList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['id'] = element.key;
        this.employeeList.push(y as Employee);
      });
    });

  }

  onItemClick(employee: Employee) {
    this.employeeService.selectedEmployee = Object.assign({}, employee);
  }

}

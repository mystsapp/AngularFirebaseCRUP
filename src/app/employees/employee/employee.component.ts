import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styles: []
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    if (form.value.id == null) {
      this.employeeService.insertEmployee(form.value);
    } else {
      this.employeeService.updateEmployee(form.value);
    }
    this.resetForm(form);
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.employeeService.selectedEmployee = {
      id: null,
      name: '',
      position: '',
      office: '',
      salary: 0
    };
  }

  onDelete(form: NgForm) {
    if (confirm('Are you sure want to delete this record?')) {
      this.employeeService.deleteEmployee(form.value.id);
      this.resetForm(form);
    }
  }

}

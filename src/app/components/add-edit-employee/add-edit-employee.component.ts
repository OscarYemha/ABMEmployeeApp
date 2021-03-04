import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css'],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
}]
})
export class AddEditEmployeeComponent implements OnInit {

  maritalStatus: any[] = ['Single', 'Married', 'Divorced'];
  idEmployee: any;
  action = 'Add';

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private EmployeeService: EmployeeService, private route: Router, private snackbar: MatSnackBar, private aRoute: ActivatedRoute) {
    this.myForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      entryDate: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      maritalStatus: ['' , [Validators.required]],
      sex: ['', [Validators.required]],
    });
    const idParam = 'id'
    this.idEmployee = this.aRoute.snapshot.params[idParam];
   }

  ngOnInit(): void {
    if(this.idEmployee !== undefined){
      this.action = 'Edit';
      this.itIsEdit();
    }
  }

  saveEmployee(){
    console.log(this.myForm)
    const employee: Employee = {
      fullName: this.myForm.get('fullName').value,
      email: this.myForm.get('email').value,
      entryDate: this.myForm.get('entryDate').value,
      phone: this.myForm.get('phone').value,
      maritalStatus: this.myForm.get('maritalStatus').value,
      sex: this.myForm.get('sex').value,
    };

    if(this.idEmployee !== undefined){
      this.editEmployee(employee);
    }else{
      this.addEmployee(employee);
    }

    
  }

  addEmployee(employee: Employee){
    this.EmployeeService.addEmployee(employee);
    this.snackbar.open('Employee successfully registered!', '', {
      duration: 3000
    });
    this.route.navigate(['/']);
  }

  editEmployee(employee: Employee){
    this.EmployeeService.editEmployee(employee, this.idEmployee);
    this.snackbar.open('Employee successfully updated!', '', {
      duration: 3000
    });
    this.route.navigate(['/']);
  }

  itIsEdit(){
    const employee: Employee = this.EmployeeService.getEmployee(this.idEmployee);
    console.log(employee)
    this.myForm.patchValue({
      fullName: employee.fullName,
      email: employee.email,
      entryDate: employee.entryDate,
      phone: employee.phone,
      maritalStatus: employee.maritalStatus,
      sex: employee.sex
    })
  }

}

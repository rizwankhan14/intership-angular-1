import { Component} from '@angular/core';
import { FormControl , FormGroup} from '@angular/forms';

@Component({
  selector: 'app-rfs',
  templateUrl: './rfs.component.html',
  styleUrls: ['./rfs.component.css']
})
export class RfsComponent {

  EmployeeName = new FormControl('');


  updateEmployeeName(){
    this.EmployeeName.setValue('John')
  }

 employeeForm = new FormGroup({
   Name: new FormControl(''),
   Designation: new FormControl (''),
   Employee_ID: new FormControl (''),
   Address: new FormControl (''),
   Country: new FormControl (''),
   City: new FormControl ('')
 });

 onSubmit(){
   console.log(this.employeeForm.value)
 }

 
}

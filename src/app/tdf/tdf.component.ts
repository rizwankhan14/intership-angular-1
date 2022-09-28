import { Component, OnInit } from '@angular/core';
import {Emp} from '../emp';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  Department = ['Sales', 'Marketing', 'Human Resource', 'Finance'];
  
  model = new Emp(101, 'john','project manager', this. Department[0]);
  submitted = false;

  onSubmit(){
    this.submitted = true;
  }

  get diagnostic(){
    return JSON.stringify(this.model);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}

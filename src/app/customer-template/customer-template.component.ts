import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-customer-template',
  templateUrl: './customer-template.component.html',
  styleUrls: ['./customer-template.component.css']
})
export class CustomerTemplateComponent implements OnInit {

  allCustomer = [];
  statusCode: number;
  value: Boolean = true;

  constructor(private _route: Router, private _service: ServicesService) { }

  ngOnInit() {
    this.getAllCustomers();
  }
  getAllCustomers() {
    this._service.getAllCustomer()
      .subscribe(
      data => this.allCustomer = data,
      errorCode => this.statusCode = errorCode,
    );
  }
  OnCustomer() {
    this._route.navigate(['/dashboard/customer/newCustomer']);
  }

}

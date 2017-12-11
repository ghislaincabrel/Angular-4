import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-deposite-template',
  templateUrl: './deposite-template.component.html',
  styleUrls: ['./deposite-template.component.css']
})
export class DepositeTemplateComponent implements OnInit {

  allDeposit = [];
  statusCode: number;

  constructor(private _route: Router, private _service: ServicesService) { }

  ngOnInit() {
    this.Deposit();
  }
  Deposit() {
    this._service.getdepositIterms()
      .subscribe(
      data => this.allDeposit = data,
      errorCode => this.statusCode = errorCode,
    );
  }
  OnNewDeposite() {
    this._route.navigate(['/dashboard/deposit-iterm/newDeposite']);
  }
}




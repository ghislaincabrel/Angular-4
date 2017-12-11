import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  allDash = [];
  statusCode: number;

  constructor(private _service: ServicesService) { }

  ngOnInit() {
    this.Dash();
  }
  Dash() {
    this._service.getAllCustomer()
      .subscribe(
      data => this.allDash = data,
      errorCode => this.statusCode = errorCode,
    );
  }

}

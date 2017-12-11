import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-iterms-template',
  templateUrl: './iterms-template.component.html',
  styleUrls: ['./iterms-template.component.css']
})
export class ItermsTemplateComponent implements OnInit {

  allIterms = [];
  statusCode: number;

  constructor(private _route: Router, private _service: ServicesService) { }

  ngOnInit() {
    this.AllIterms();
  }
  AllIterms() {
    this._service.getAllIterms()
      .subscribe(
      data => this.allIterms = data,
      errorCode => this.statusCode = errorCode,
    );
  }
  OnNewIterm() {
    this._route.navigate(['/dashboard/iterm/newIterms']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-material-template',
  templateUrl: './material-template.component.html',
  styleUrls: ['./material-template.component.css']
})
export class MaterialTemplateComponent implements OnInit {

  allMaterial = [];
  statusCode: number;

  constructor(private _route: Router, private _service: ServicesService) { }

  ngOnInit() {
    this.Material();
  }
  Material() {
    this._service.getAllMaterial()
      .subscribe(
      data => this.allMaterial = data,
      errorCode => this.statusCode = errorCode,
    );
  }
  OnNewMaterial() {
    this._route.navigate(['/dashboard/cleaning-materials/newMaterial']);

  }
}

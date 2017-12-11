import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
// import { PipePipe } from './pipe.pipe';
import 'rxjs/add/operator/do';


@Component({
  selector: 'app-user-template',
  templateUrl: './user-template.component.html',
  styleUrls: ['./user-template.component.css']
})
export class UserTemplateComponent implements OnInit {

  allUsers = [];
  search: String;
  value: Boolean = false;
  statusCode: number;
  requestProcessing = false;
  articleIdToUpdate = null;
  processValidation = false;
  constructor(private _route: Router, private _service: ServicesService) {
    console.log(this.allUsers);
  }

  ngOnInit() {

    this._service.getAllUsers()
      .subscribe(
      data => this.allUsers = data,
      errorCode => this.statusCode = errorCode,
    );
    // this._service.getAllUsers()
    //  .subscribe(data => {
    // this.allUsers = data,
    // console.log(`all ` + this.allUsers);
    // });
  }

  OnNewUser() {
    this._route.navigate(['/dashboard/user/newUser']);
  }

}

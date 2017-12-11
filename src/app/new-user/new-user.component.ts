import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  userName: String = 'ghislain';
  allUsers = [];
  search: String;
  value: Boolean = false;
  statusCode: number;
  requestProcessing = false;
  articleIdToUpdate = null;
  processValidation = false;
  constructor(private _flashMessagesService: FlashMessagesService, private _route: Router, private _service: ServicesService) { }

  ngOnInit() {

  }

  onSubmit(value) {
    console.log(value);
    console.log(value.name);
    // let article = new Article(null, title, category);
    this._service.createUser(value)
      .subscribe(successCode => {
        this.statusCode = successCode;
      }, errorCode => this.statusCode = errorCode);

    if (this.statusCode === 500) {
      this._flashMessagesService.show('A new user have been added', { cssClass: 'ui green message', timeout: 4000 });
      this._route.navigate(['/dashboard/user/userT']);

    }
  }

}


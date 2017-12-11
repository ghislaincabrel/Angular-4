import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: String;
  constructor(private _route: Router, private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }
  OnSubmit(value) {
    this.user = value.userName;
    if ((value.userName === 'Admin') && (value.password === 'password')) {
      this._route.navigate(['dashboard']);
      this._flashMessagesService.show('WELCOME ' + this.user.toLocaleUpperCase(), { cssClass: 'ui green message', timeout: 4000 });

    } else {
      this._flashMessagesService.show('The password or the email addres are not correct  ', { cssClass: 'ui red message', timeout: 4000 });
      console.log('fail');
    }
  }

}

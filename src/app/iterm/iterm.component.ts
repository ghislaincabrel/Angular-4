import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iterm',
  templateUrl: './iterm.component.html',
  styleUrls: ['./iterm.component.css']
})
export class ItermComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit() {
  }
  OnNewIterm() {
this._route.navigate(['/newIterms']);
  }
}

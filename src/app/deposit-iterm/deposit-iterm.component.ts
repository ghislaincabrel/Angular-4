import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposit-iterm',
  templateUrl: './deposit-iterm.component.html',
  styleUrls: ['./deposit-iterm.component.css']
})
export class DepositItermComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit() {
  }
  OnNewDeposite() {
    this._route.navigate(['/newDeposite']);
  }
}

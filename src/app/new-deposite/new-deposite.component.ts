import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-deposite',
  templateUrl: './new-deposite.component.html',
  styleUrls: ['./new-deposite.component.css']
})
export class NewDepositeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(value) {
    console.log(value);
  }
}

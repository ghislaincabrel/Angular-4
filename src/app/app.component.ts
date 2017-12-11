import { Component } from '@angular/core';
import { ServicesService } from './services.service';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

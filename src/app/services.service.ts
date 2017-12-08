import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CustomerModele } from './customer.model';
import 'rxjs/add/operator/map';

@Injectable()
export class ServicesService {
  url: string;
  constructor(private http: Http) { }

  getValue(): Observable<CustomerModele> {
    return this.http.get(this.url).map((response: Response) => <CustomerModele>response.json());
  }

}

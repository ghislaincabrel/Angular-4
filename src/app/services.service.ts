import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';

@Injectable()
export class ServicesService {

  // URLs for CRUD operations

  userUrl = '/api/v1/users';
  customerUrl = '/api/v1/customers';
  materialUrl = '/api/v1/materials';
  itermslUrl = '/api/v1/items';
  depositItermslUrl = 'http://localhost:8080/api/v1';
  dashUrl = 'http://localhost:8080/api/v1';


  cpHeaders = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.cpHeaders });
  constructor(private http: Http) { }
  // Fetch all articles
  getAllUsers(): Observable<any[]> {
    return this.http.get(this.userUrl, this.options)
      .map(this.extractData)
      .catch(this.handleError).
      do(data => console.log(JSON.stringify(data)));

  }
  // fetch all customer
  getAllCustomer(): Observable<any[]> {
    return this.http.get(this.customerUrl, this.options)
      .map(this.extractData)
      .catch(this.handleError).
      do(data => console.log(JSON.stringify(data)));

  }

  // fetch all material
  getAllMaterial(): Observable<any[]> {
    return this.http.get(this.materialUrl, this.options)
      .map(this.extractData)
      .catch(this.handleError).
      do(data => console.log(JSON.stringify(data)));

  }

  // fetch all iterm
  getAllIterms(): Observable<any[]> {
    return this.http.get(this.itermslUrl, this.options)
      .map(this.extractData)
      .catch(this.handleError).
      do(data => console.log(JSON.stringify(data)));

  }


  // fetch all depositIterms
  getdepositIterms(): Observable<any[]> {
    return this.http.get(this.depositItermslUrl, this.options)
      .map(this.extractData)
      .catch(this.handleError).
      do(data => console.log(JSON.stringify(data)));

  }
  // fetch all depositIterms
  getdash(): Observable<any[]> {
    return this.http.get(this.dashUrl, this.options)
      .map(this.extractData)
      .catch(this.handleError).
      do(data => console.log(JSON.stringify(data)));

  }
  // Create users
  createUser(article): Observable<any> {

    return this.http.post(this.userUrl, article, this.options)
      .map(success => success.status)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body;
  }
  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }



}

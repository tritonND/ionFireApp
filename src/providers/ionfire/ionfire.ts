import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the IonfireProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IonfireProvider {

  constructor(public http: HttpClient) {
    console.log('Hello IonfireProvider Provider');
  }

}

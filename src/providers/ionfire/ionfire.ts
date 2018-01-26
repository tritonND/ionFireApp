import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formdata } from '../../models/data.models';
import { Camera } from '@ionic-native/camera';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the IonfireProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IonfireProvider {

  constructor(public http: HttpClient, private formdata : Formdata, private geo : Geolocation, 
    private db : AngularFireDatabase) {
    console.log('Hello IonfireProvider Provider');
  }



}

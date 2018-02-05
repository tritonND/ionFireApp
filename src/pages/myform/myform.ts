import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController } from 'ionic-angular';
import { Geolocation, GeolocationOptions, Geoposition  } from '@ionic-native/geolocation';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-myform',
  templateUrl: 'myform.html',
})
export class MyformPage {

  item : any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  private goe : Geolocation, private db: AngularFireDatabase, private loadingCtrl : LoadingController ) 
    {
    this.item.state = "";
    this.item.email = "";
    this.item.gender = "";
    this.item.firstname = "";
    this.item.lastname = "";
    this.item.address = "";
    this.item.phone = "";
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyformPage');
  }

}

import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController } from 'ionic-angular';
import { Geolocation, GeolocationOptions, Geoposition  } from '@ionic-native/geolocation';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Camera, CameraOptions } from '@ionic-native/camera';
 

/**
 * Generated class for the FormsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forms',
  templateUrl: 'forms.html',
})
export class FormsPage {
  item : any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private goe : Geolocation, private db: AngularFireDatabase ) 
    {
    this.item.state = "";
    this.item.email = "";
    this.item.gender = "";
    this.item.firstname = "";
    this.item.lastname = "";
    this.item.address = "";
    this.item.phone = "";
  }


  private profileListRef = this.db.list('users');

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormsPage');
  }

  setProfile(){
    console.log("got in here");
    // this.db.list('users').push(this.item)
    this.profileListRef.push(this.item)
    .then( (data)=> {
      console.log('successful');
      console.log(data.key);
    },
    (Error) => {console.log('Error occured')}
  )
    
    ;
  }

}

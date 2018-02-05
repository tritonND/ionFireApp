import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage';


/**
 * Generated class for the LstoragesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lstorages',
  templateUrl: 'lstorages.html',
})
export class LstoragesPage {
  stores1 : any;
  stores2 : any;

  myData : string[] = [];
   
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public storage : Storage, public toastCtrl : ToastController, private lstore : NativeStorage) {
  }



setInStorage(){
  this.storage.set('stores5', {fname : "Pedrov", lname : "Skii", phone : "07109878861"});
  console.log('Data Stored');

  this.lstore.setItem('stores5', {fname : "Pedrov", lname : "Skii", phone : "07109878861"});
  let toast = this.toastCtrl.create({
    message: 'User was added successfully',
    duration: 3000,
    position: 'top'
  });
toast.present();
}


setInStorage1(){
  this.storage.set('stores9', {fname : "Giles", lname : "Morgan", phone : "0983778861"});
  this.lstore.setItem('stores9', {fname : "Giles", lname : "Morgan", phone : "0983778861"});
  console.log('Data Stored');

  //this.lstore.keys();
  let toast = this.toastCtrl.create({
    message: 'User was added successfully',
    duration: 3000,
    position: 'bottom'
  });
toast.present();
}


getFromStorage1()
{
  return this.storage.get('stores1');

}


  ionViewDidLoad() {
    console.log('ionViewDidLoad LstoragesPage');

    return this.storage.keys()
    .then((keys) => {
      // console.log(keys);
      // console.log(keys.length);
      // console.log(keys[1]);
        this.myData = keys;
        // console.log(this.myData);

    for(var i=0; i < this.myData.length; i++)
    {
        console.log(keys[i]);
        this.storage.get(keys[i])
       .then( (vals)=> {
        //console.log(keys[i]); 
        console.log(vals.fname);
        console.log(vals.lname);
        console.log(vals.phone);
        console.log('*****'); 
       })
    }

    //   console.log(this.storage.get(keys[3])
    //   .then( (vals)=> {
    //     console.log(vals.fname);
    //     console.log(vals.lname);
    //     console.log(vals.phone);
    //   })
    //   .catch( (error) => {console.error(error);})
    // );
    })
  }

}

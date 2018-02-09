import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController, ToastController} from 'ionic-angular';
import { Geolocation, GeolocationOptions, Geoposition  } from '@ionic-native/geolocation';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HomePage } from '../home/home';
import { Network } from '@ionic-native/network';
import { NativeStorage } from '@ionic-native/native-storage';
import { Storage } from '@ionic/storage';
// import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Http } from '@angular/http';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';


@IonicPage()
@Component({
  selector: 'page-myform',
  templateUrl: 'myform.html',
})
export class MyformPage {

  item : any = {};

   options : CameraOptions = {
    quality : 50,
    mediaType: this.camera.MediaType.PICTURE,
    destinationType : this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    correctOrientation : true,
    saveToPhotoAlbum : true,
    sourceType: this.camera.PictureSourceType.CAMERA    
  }

  image : string;
  img : string;
  imageURI:any;
  imageFileName:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera : Camera, private http : Http,
  private goe : Geolocation, private network : Network, private toastCtrl : ToastController, private storage : Storage,
  private db: AngularFireDatabase, private loadingCtrl : LoadingController, private lstore : NativeStorage,
  private transfer: FileTransfer, private file: File ) 
    {
    this.item.state = "";
    this.item.email = "";
    this.item.gender = "";
    this.item.firstname = "";
    this.item.lastname = "";
    this.item.address = "";
    this.item.phone = "";

    this.http = http;
  }

  private profileListRef = this.db.list('profiles'); 

  // getPicture() {
  setProfile() {
  //var links = 'http://localhost/ionphp/api.php';

  var link = 'http://132.148.23.19/fts/ionphp/api.php'; 
  var myData = JSON.stringify({
    "state" : this.item.state,
    "email" : this.item.email,
    "gender": this.item.gender,
    "firstname" : this.item.firstname,
    "lastname" : this.item.lastname,
    "address" : this.item.address,
    "phone" : this.item.phone,
  });
  
  this.http.post(link, myData)
  .subscribe(data => {
  this.item.response = data["_body"]; 
  let loader = this.loadingCtrl.create({
      content: "Database Insert Succesful...",
      duration: 3000
       });
      loader.present();

  }, error => {
  console.log("error occured");
  alert("Error occured");
  });  
 // finished transfering to live server


 
this.camera.getPicture(this.options)
.then((imageData) => {
  this.imageURI = imageData;
  const fileTransfer: FileTransferObject = this.transfer.create();

  let options1: FileUploadOptions = {
     fileKey: 'file',
     fileName: 'name.jpg',
     chunkedMode: false,
     mimeType: "image/jpeg",
     headers: {}
  }

  fileTransfer.upload(imageData, 'http://132.148.23.19/fts/ionphp/uploads.php', options1)
  .then((data) => {
    let loader = this.loadingCtrl.create({
      content: "File Upload Succesful...",
      duration: 3000
       });
      loader.present();
     alert(data.response);
      this.navCtrl.setRoot(HomePage);
  //  alert("success");
  //  alert(imageData);
   }, 
  (err) => {
   // alert(imageData);  
    alert("ERROR"+JSON.stringify(err));
  });

}, 
(err) => {
  console.log(err);
});

   
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad MyformPage');
  }

}

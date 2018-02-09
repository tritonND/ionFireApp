// import { Component, NgModule } from '@angular/core';
// import { IonicPage, NavController, NavParams, Platform, LoadingController, ToastController} from 'ionic-angular';
// import { Geolocation, GeolocationOptions, Geoposition  } from '@ionic-native/geolocation';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { Camera, CameraOptions } from '@ionic-native/camera';
// import { HomePage } from '../home/home';
// import { Network } from '@ionic-native/network';
// import { NativeStorage } from '@ionic-native/native-storage';
// import { Storage } from '@ionic/storage';
// // import { ToastController } from 'ionic-angular/components/toast/toast-controller';
// import { Http } from '@angular/http';

// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
// import { File } from '@ionic-native/file';


// @IonicPage()
// @Component({
//   selector: 'page-myform',
//   templateUrl: 'myform.html',
// })
// export class MyformPage {

//   item : any = {};

//    options : CameraOptions = {
//     quality : 50,
//     mediaType: this.camera.MediaType.PICTURE,
//     destinationType : this.camera.DestinationType.FILE_URI,
//     encodingType: this.camera.EncodingType.JPEG,
//     correctOrientation : true,
//     saveToPhotoAlbum : true,
//     sourceType: this.camera.PictureSourceType.CAMERA    
//   }

//   image : string;
//   img : string;
//   imageURI:any;
//   imageFileName:any;

//   constructor(public navCtrl: NavController, public navParams: NavParams, private camera : Camera, private http : Http,
//   private goe : Geolocation, private network : Network, private toastCtrl : ToastController, private storage : Storage,
//   private db: AngularFireDatabase, private loadingCtrl : LoadingController, private lstore : NativeStorage,
//   private transfer: FileTransfer, private file: File ) 
//     {
//     this.item.state = "";
//     this.item.email = "";
//     this.item.gender = "";
//     this.item.firstname = "";
//     this.item.lastname = "";
//     this.item.address = "";
//     this.item.phone = "";

//     this.http = http;
//   }

//   private profileListRef = this.db.list('profiles'); 

//   getPicture() {
  
//     this.camera.getPicture(this.options).then((imageData) => {
//       this.imageURI = imageData;
//     }, (err) => {
//       console.log(err);
//       //this.toastCtrl(err);
//     });
//   }




//   vals : string; 
//   getPicture11() : string{  
//     try 
//     {
//      const result = this.camera.getPicture(this.options);
//      this.image = `data:image/jpeg;base64,${result}`;
//     } 
//     catch (error) 
//     {
//        console.error(error);  
//     }
//     return this.vals = this.image;
//   }


//    fileTransfer: FileTransferObject = this.transfer.create();

//   setProfile(){
//    if(this.network.type === 'none')
//    {
//     let toast = this.toastCtrl.create({
//       message: 'No network detected. Data will be stored on local device',
//       duration: 3000,
//       position: 'center'
//     });
//   toast.present();
//    // this.img = this.getPicture() ;

//     this.storage.set(`keys`,{
//       "state" : this.item.state,
//       "email" : this.item.email,
//       "gender": this.item.gender,
//       "firstname" : this.item.firstname,
//       "lastname" : this.item.lastname,
//       "address" : this.item.address,
//       "phone" : this.item.phone
//     //  "img" : this.img
//    });

//    let loader = this.loadingCtrl.create({
//     content: "Uploading..."
//   });
//   loader.present();
//   const fileTransfer: FileTransferObject = this.transfer.create();

//   let options: FileUploadOptions = {
//     fileKey: 'ionicfile',
//     fileName: 'ionicfile',
//     chunkedMode: false,
//     mimeType: "image/jpeg",
//     headers: {}
//   }

//   fileTransfer.upload(this.imageURI, 'http://127.0.0.1/apiImg.php', options)
//     .then((data) => {
//     console.log(data+" Uploaded Successfully");
//     this.imageFileName = "http://127.0.0.1/uploads/ionicfile.jpg"
//     loader.dismiss();
//    // this.presentToast("Image uploaded successfully");
//   }, (err) => {
//     console.log(err);
//    // loader.dismiss();
//    // this.presentToast(err);
//   });






//    } 

//    else{ 
//     let toast = this.toastCtrl.create({
//       message: 'Network detected. Data will be stored on remote server',
//       duration: 3000,
//       position: 'bottom'
//     });
//   toast.present();

//     //this.img = this.getPicture() ;

//   //   this.profileListRef.push(this.item)
//   //   .then( (data)=> {
//   //     let loader = this.loadingCtrl.create({
//   //       content: "Succesful...",
//   //       duration: 4000
//   //     });
//   //     loader.present();
//   //     this.navCtrl.setRoot(HomePage);
//   //     console.log('successful');
//   //     console.log(data.key);
//   //   },
//   //   (Error) => {console.log('Error occured')}
//   // );


//   var link = 'http://localhost/ionphp/api.php';
//   var myData = JSON.stringify({
//     "state" : this.item.state,
//     "email" : this.item.email,
//     "gender": this.item.gender,
//     "firstname" : this.item.firstname,
//     "lastname" : this.item.lastname,
//     "address" : this.item.address,
//     "phone" : this.item.phone,
//   });
  
//   this.http.post(link, myData)
//   .subscribe(data => {
//   this.item.response = data["_body"]; 
//   }, error => {
//   console.log("error occured");
//   });  
// }

//     let options: FileUploadOptions = {
//        fileKey: 'file',
//        fileName: 'name.jpg',
       
//     }
   
//     this.fileTransfer.upload('<file path>', 'http://localhost/ionphp/apiImg.php', options)
//        .then((data) => {
//         let toast = this.toastCtrl.create({
//           message: 'File Upload successful',
//           duration: 3000,
//           position: 'bottom'
//         });
//       toast.present();
    
//        }, (err) => {
//         console.error(err);
        
//        })
  
   

//  }


//   ionViewDidLoad() {
//     console.log('ionViewDidLoad MyformPage');
//   }

// }




// this.camera.getPicture(this.options)
// .then((imageData) => {
//   this.imageURI = imageData;
//   const fileTransfer: FileTransferObject = this.transfer.create();

//   let options1: FileUploadOptions = {
//      fileKey: 'file',
//      fileName: 'name.jpg',
//      chunkedMode: false,
//      mimeType: "image/jpeg",
//      headers: {}
//   }

//   fileTransfer.upload(imageData, 'http://localhost/ionphp/', options1)
//   .then((data) => {
//    alert("success");
//    alert(imageData);
//    }, 
//   (err) => {
//     alert(imageData);
//     alert(JSON.stringify(err));
//   });

// }, 
// (err) => {
//   console.log(err);
// });
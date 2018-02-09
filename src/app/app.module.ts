import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { FormsPage } from '../pages/forms/forms';
import { LoginPage } from '../pages/login/login';
import { MyformPage } from '../pages/myform/myform';

//import firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
// import { IonfireProvider } from '../providers/ionfire/ionfire';
import { Formdata } from '../models/data.models';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { IonfireProvider } from '../providers/ionfire/ionfire';

import { LstoragesPage } from '../pages/lstorages/lstorages';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage';
import { Network } from '@ionic-native/network';
import { HttpModule } from "@angular/http";


import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';


 
export const firebaseConfig = {
  apiKey: "AIzaSyBjeEG0luJ-J6elIGEg3Oem_rm0k5KuhI8",
  authDomain: "fireapp2-9ba73.firebaseapp.com",
  databaseURL: "https://fireapp2-9ba73.firebaseio.com",
  projectId: "fireapp2-9ba73",
  storageBucket: "",
  messagingSenderId: "117392197923"
 };

 

@NgModule({
  declarations: [
    MyApp,
    HomePage, WelcomePage, FormsPage, LoginPage, LstoragesPage, MyformPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot(),
    AngularFireAuthModule, HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, WelcomePage, FormsPage, LoginPage, LstoragesPage, MyformPage
  ],
  providers: [
    StatusBar,
    SplashScreen, Geolocation, Camera, AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    IonfireProvider, NativeStorage, Network, FileTransfer, FileTransferObject, File
    
  ]
})
export class AppModule {}

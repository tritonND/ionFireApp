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
//import firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';


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
    HomePage, WelcomePage, FormsPage, LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, WelcomePage, FormsPage, LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

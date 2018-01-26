import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormsPage } from '../forms/forms';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  data : any = { }

  constructor(private fire : AngularFireAuth, public navCtrl: NavController,
    private loadingCtrl: LoadingController , public navParams: NavParams) {
    this.data.username = '';
    this.data.password = '';
  }

  signIn(){

    if (this.data.username == "" || this.data.password == "")
    {
      let loader = this.loadingCtrl.create({
        content: "Login credential cant be empty...",
        duration: 4000
      });
      loader.present();
    }
  else
   { this.fire.auth.signInWithEmailAndPassword(this.data.username, this.data.password)
    .then( user => {
           console.log(user);
           let loader = this.loadingCtrl.create({
            content: "Login Succesful...",
            duration: 4000
          });
          loader.present();

          this.navCtrl.setRoot(FormsPage);
          })
    .catch( Error => {console.error(Error);
      console.error(Error.message);
      let loader = this.loadingCtrl.create({
        content: Error.message,
        duration: 4000
      });
      loader.present();
    })      
  }


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

}

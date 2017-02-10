import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';
import { HomePage } from '../home/home';
//import * as firebase from 'firebase';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public af: AngularFire) {
  }

  loginTwitter() {
    let self = this;
    this.af.auth.login({
      provider: AuthProviders.Twitter,
      method: AuthMethods.Popup
    }).then(function (response) {
      console.log(response);
      self.navCtrl.setRoot(HomePage);
    }).catch(function (error) {
      console.log(error);
    });
  }

  loginFb() {
    let self = this;
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    }).then(function (response) {
      self.navCtrl.setRoot(HomePage);
    }).catch(function (error) {
      console.log(error);
    });
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire, AuthMethods, AuthProviders, FirebaseListObservable } from 'angularfire2';
import { HomePage } from '../home/home';
import * as firebase from 'firebase';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  users: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public af: AngularFire) {
    this.users = this.af.database.list('/Users');
  }

  loginTwitter() {
    let self = this;
    this.af.auth.login({
      provider: AuthProviders.Twitter,
      method: AuthMethods.Popup
    }).then(function (response) {
      self.create_new_user(self);
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
      self.create_new_user(self);
    }).catch(function (error) {
      console.log(error);
    });
  }

  create_new_user(self: any) {
    let user = firebase.auth().currentUser;
    if (user != null) {
      let parentThis = self;
      this.af.database.object('/Users/' + user.uid)
        .subscribe((obj) => {
          if (obj.$exists()) {
            parentThis.navCtrl.setRoot(HomePage);
          }
          else {
            try {
              parentThis.af.database
                .object('/Users/' + user.uid)
                .set({ name: user.displayName });
              parentThis.navCtrl.setRoot(HomePage);
            }
            catch (error) {
              console.log(error);
            }
          }
        })
    }
    else {
      alert('Login Failed. Try again')
      self.rootPage = LoginPage;
    }
  }

}

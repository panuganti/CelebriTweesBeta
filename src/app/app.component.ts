import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
//import { Entity } from '../library/tweet';
import { LoginPage } from '../pages/login/login';
import { AngularFire } from 'angularfire2';
//import { ComposePage } from '../pages/compose/compose';
import * as firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
rootPage: any;

  constructor(platform: Platform, public af: AngularFire) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  ngOnInit() {
    let user = firebase.auth().currentUser;
    if (user!=null)
    {
      this.af.database.object('/Users/'+user.uid)
        .subscribe((obj) => {
          if (obj.$exists())
          {
            this.rootPage = HomePage;
          }
          else {
            this.rootPage = LoginPage;
          }
        })
    }
    else {
      this.rootPage = LoginPage;
    }
  }
}

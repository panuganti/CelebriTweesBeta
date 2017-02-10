import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
//import { Entity } from '../library/tweet';
import { LoginPage } from '../pages/login/login';
import { AngularFire } from 'angularfire2';

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
    this.af.auth.subscribe(user => {
        if (user){
        this.rootPage = HomePage;
      }
      else {
        this.rootPage = LoginPage;
      }
    })
  }
}

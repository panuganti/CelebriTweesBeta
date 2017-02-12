import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire } from 'angularfire2';


@Component({
  selector: 'page-home-popover',
  templateUrl: 'home-popover.html'
})
export class HomePopoverPage {

  constructor(public navCtrl: NavController, public af: AngularFire) {}

  logout() {
    this.af.auth.logout();
  }
}

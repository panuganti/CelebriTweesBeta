import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  celebs: FirebaseListObservable<any>;
  input: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, public af: AngularFire) {
    this.celebs = this.af.database.list('/Celebs');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onInput(ev: any) {
    this.input = ev.target.value;
  }

  getCelebs(celebs: any, input: string) {
    if (input == null || input.length == 0) { return null; }
    let self = this;
    if (this.input && this.input.trim() != '') {
      celebs = celebs.filter((item) => {
        return (item.name.toLowerCase().indexOf(self.input) > -1);
      })
    }
    return celebs;
  }

  onCancel(ev: any) {
    this.input = '';
  }

  addToWatchlist(id) {
    let user = firebase.auth().currentUser;
    let parentThis = this;
    this.af.database.object('/Users/' + user.uid)
      .subscribe((obj) => {
        if (!obj.$exists()) {
          try {
            parentThis.af.database.list('/Watchlists/' + user.uid).push({ id: id });
          }
          catch (error) {
            console.log(error);
          }
        }
        else {
          parentThis.af.database.list('/Watchlists/' + user.uid).push({ id: id });
        }
      })
    this.viewCtrl.dismiss();
  }

}

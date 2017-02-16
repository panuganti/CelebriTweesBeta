import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

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

  getCelebs(celebs: any) {
    if (this.input && this.input.trim() != '') {
      celebs = celebs.filter((item) => {
        return (item.name.toLowerCase().indexOf(this.input.toLowerCase()) > -1);
      })
    }
    return celebs;
  }

  addToWatchlist(celeb) {
    this.viewCtrl.dismiss();
  }

}

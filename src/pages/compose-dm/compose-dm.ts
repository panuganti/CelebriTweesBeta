import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { FirebaseListObservable, AngularFire } from 'angularfire2';
import * as firebase from 'firebase';

@Component({
  selector: 'page-compose-dm',
  templateUrl: 'compose-dm.html'
})
export class ComposeDmPage {
  users: FirebaseListObservable<any>;
  user: any;
  input: string = '';
  composeMode: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public af: AngularFire, public viewCtrl: ViewController) { }

  onInput(ev: any) {
    this.user = firebase.auth().currentUser;
    this.users = this.af.database.list('/following/' + this.user.uid, {});
  }

  getUsers(list: any) {
    if (this.input && this.input.trim() != '') {
      list = list.filter((item) => {
        return (item.toLowerCase().indexOf(this.input.toLowerCase()) > -1);
      })
    }
    return list;
  }

  compose(to:any) {
    this.viewCtrl.dismiss(to);
  }
}

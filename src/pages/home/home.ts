import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable, AngularFireDatabase, AngularFireModule } from 'angularfire2';
import { Tweet } from '../../library/tweet';
//import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tweets: FirebaseListObservable<Tweet[]>;

  tweet: Tweet;
  constructor(public navCtrl: NavController, public af: AngularFire,
    public afd: AngularFireDatabase, public afm: AngularFireModule) {
      
    this.tweets = af.database.list('/Items');
  }

  showStreams() {
    console.log('streams');
  }
  showNotifications() { }
  showDirectMessages() { }
  showSearch() { }
  showPopover() { }

  //#region tweet events
  like(id: string) {
    alert(id);
  }
  retweet(id: string) { }
  conversation(id: string) { }
  reply(id: string) { }
  //#endregion tweet events

  logout() {
    this.af.auth.logout();
  }
}

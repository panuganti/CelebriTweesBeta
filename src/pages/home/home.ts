import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable, AngularFireDatabase, AngularFireModule } from 'angularfire2';
import { Tweet, Celeb } from '../../library/tweet';
import {ComposePage} from '../compose/compose';
import { SearchPage } from '../search/search';
import { NotificationsPage } from '../notifications/notifications';
import { StreamsPage } from '../streams/streams';
import { HomePopoverPage } from '../home-popover/home-popover';
import { DmsPage } from '../dms/dms';
//import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tweets: FirebaseListObservable<Tweet[]>;
  celebs: FirebaseListObservable<Celeb[]>
  tweet: Tweet;
  segment: string = "feed";

  constructor(public navCtrl: NavController, public af: AngularFire,
        public afd: AngularFireDatabase, public afm: AngularFireModule,
                                  public popoverCtrl: PopoverController) {      
    this.tweets = af.database.list('/Tweets');
  }

  getFollowersCount(obj: any) {
    try {
      return obj.length;
    }
    catch (e) {
      return 0;
    }
  }

  add() {
    if (this.segment == "feed")
    {
      this.navCtrl.push(ComposePage);
    }
    else if (this.segment == "watchlist" || this.segment == "trending")
    {
      this.navCtrl.push(SearchPage);
    }
  }

  showStreams() {
    this.navCtrl.push(StreamsPage);
  }
  showNotifications() { 
    this.navCtrl.push(NotificationsPage);
  }
  showDirectMessages() { 
    this.navCtrl.push(DmsPage);
  }
  showSearch() { }
  showPopover(ev) { 
    let popover = this.popoverCtrl.create(HomePopoverPage);
    popover.present({ev: ev});
  }

  //#region tweet events
  like(id: string) {
    alert(id);
  }
  retweet(id: string) { }
  conversation(id: string) { }
  reply(id: string) { }
  //#endregion tweet events

}

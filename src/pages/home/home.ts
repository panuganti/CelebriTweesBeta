import { Component } from '@angular/core';
import { NavController, PopoverController, ModalController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable, AngularFireDatabase, AngularFireModule } from 'angularfire2';
import { Tweet } from '../../library/tweet';
import {ComposePage} from '../compose/compose';
import { SearchPage } from '../search/search';
import { NotificationsPage } from '../notifications/notifications';
import { StreamsPage } from '../streams/streams';
import { HomePopoverPage } from '../home-popover/home-popover';
import { DmsPage } from '../dms/dms';
import { LoginPage } from '../login/login';
import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tweets: FirebaseListObservable<any>;
  celebs: FirebaseListObservable<any>
  tweet: Tweet;
  segment: string = "feed";
  watchlist: FirebaseListObservable<any>;
  trending: FirebaseListObservable<any>;
  user: any;

  constructor(public navCtrl: NavController, public af: AngularFire,
        public afd: AngularFireDatabase, public afm: AngularFireModule,
        public modalCtrl:ModalController , public popoverCtrl: PopoverController) {
    this.user = firebase.auth().currentUser;
    this.watchlist = this.af.database.list('/Watchlists/' + this.user.uid);
    this.trending = this.af.database.list('/Trending');
  }

  ionViewDidEnter() {
    this.af.database.object('/Watchlists/' + this.user.uid)
      .subscribe((obj) => {
        if (obj.$exists())
        {
        }
        else {
          this.segment = 'watchlist';
        }
      })
  }

  getUserName(uid:any) {
    this.af.database.object('/Users/'+uid+'/name')
  }

  getUserHandle(uid:any) {
    this.af.database.object('/Users/'+uid+'/name')
  }

  getTweetsOfCeleb(celeb: any) {
    return this.af.database.list('/Celebs/'+celeb.id+'/tweets');
  }

  getWatchlistCount(list: any) {
    try {
      return list.length;
    }
    catch(error)
    {
      return 0;
    }
  }

  getFollowersCount(obj: any) {
    try {
      return obj.length;
    }
    catch (e) {
      return -1;
    }
  }

  add() {
    if (this.segment == "feed")
    {
      this.navCtrl.push(ComposePage);
    }
    else if (this.segment == "watchlist" || this.segment == "trending")
    {
      let watchlistModal = this.modalCtrl.create(SearchPage);
      watchlistModal.present();
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

  logout() {
    this.af.auth.logout().then(() => {
      this.navCtrl.setRoot(LoginPage);
    });
  }

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

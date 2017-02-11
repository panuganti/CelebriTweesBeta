import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFire } from 'angularfire2';

@Component({
  selector: 'page-compose',
  templateUrl: 'compose.html'
})
export class ComposePage {
  tweetText: string;
  maxLength: number = 180;
  tweets: FirebaseListObservable<any>;
  celebtweets: FirebaseListObservable<any>;
  usertweets: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController,  public af: AngularFire) {
    this.tweets = af.database.list('/Tweets');
    this.celebtweets = af.database.list('/CelebTweets');
    this.usertweets = af.database.list('/UserTweets');
  }

  getLength() {
    if (this.tweetText != undefined)
    {
      return this.maxLength - this.tweetText.length;
    }
    return this.maxLength;
  }

  postTweet() {
  }

}

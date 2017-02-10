import { Input, Output, Component, EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'tweet',
  templateUrl: 'tweet.html'
})
export class TweetComponent {
@Input() avatar: string;
@Input() name: string;
@Input() handle: string;
@Input() img: string;
@Input() tweetText: string;
@Input() id: string;

@Output() hashtagClick: EventEmitter<string> = new EventEmitter();
@Output() celebClick: EventEmitter<string> = new EventEmitter();

@Input() likeCount: number;
@Input() retweetCount: number;
@Input() chatCount: number;
@Input() time: Date;

@Output() like: EventEmitter<string> = new EventEmitter();
@Output() retweet: EventEmitter<string> = new EventEmitter();
@Output() conversation: EventEmitter<string> = new EventEmitter();
@Output() reply: EventEmitter<string> = new EventEmitter();

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

emitClick(term:string) {
  this.hashtagClick.emit(term);
}

emitLike() {
  console.log(this.id);
  this.like.emit(this.id);
}

emitRetweet() {
  this.retweet.emit(this.id);
}

emitChat() {
  this.conversation.emit(this.id);
}

emitReply() {
  this.reply.emit(this.id);
}

}

import { Input, Output, Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'reaction',
  templateUrl: 'reaction.html'
})
export class ReactionComponent {
  @Input() likeCount: number;
  @Input() retweetCount: number;
  @Input() chatCount: number;
  @Input() time: Date;

  @Output() like: EventEmitter<any> = new EventEmitter();
  @Output() retweet: EventEmitter<any> = new EventEmitter();
  @Output() openChat: EventEmitter<any> = new EventEmitter();
  @Output() reply: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  emitLike() {
    this.like.emit();
  }

  emitReply() {
    this.reply.emit();
  }

  emitRetweet() {
    this.retweet.emit();
  }

  emitChat() {
    this.openChat.emit();
  }

}

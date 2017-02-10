import { Input, Output, Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'feed-header',
  templateUrl: 'feed-header.html'
})
export class FeedHeaderComponent {
@Input() img: string;
@Output() streamsClick: EventEmitter<any> = new EventEmitter();
@Output() notificationsClick:  EventEmitter<any> = new EventEmitter();
@Output() directMessagesClick:  EventEmitter<any> = new EventEmitter();
@Output() searchClick:  EventEmitter<any> = new EventEmitter();
@Output() popoverClick:  EventEmitter<any> = new EventEmitter();

  constructor() {}

  streamsClicked(ev) {
    this.streamsClick.next(ev);
  }

  notificationsClicked(ev) {
    this.notificationsClick.next(ev);
  }

  directMessagesClicked(ev) {
    this.directMessagesClick.next(ev);
  }

  searchClicked(ev) {
    this.searchClick.next(ev);
  }

  popoverClicked(ev) {
    this.popoverClick.next(ev);
  }
}

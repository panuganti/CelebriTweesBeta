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

  streamsClicked() {
    this.streamsClick.emit();
  }

  notificationsClicked() {
    this.notificationsClick.emit();
  }

  directMessagesClicked() {
    this.directMessagesClick.emit();
  }

  searchClicked() {
    this.searchClick.emit();
  }

  popoverClicked() {
    this.popoverClick.emit();
  }
}

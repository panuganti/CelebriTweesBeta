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
    console.log('notificationsClick');
    this.notificationsClick.emit();
  }

  directMessagesClicked() {
    console.log('dms');
    this.directMessagesClick.emit();
  }

  searchClicked() {
    console.log('search');
    this.searchClick.emit();
  }

  popoverClicked() {
    console.log('pop'); 
    this.popoverClick.emit();
  }
}

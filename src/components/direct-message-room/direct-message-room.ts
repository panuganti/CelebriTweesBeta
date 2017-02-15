import { Input, Output, Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'direct-message-room',
  templateUrl: 'direct-message-room.html'
})
export class DirectMessageRoomComponent {
@Input() text: string;
@Input() name: string;
@Input() time: Date;
@Input() avatar: string;
@Input() roomname: string;
@Input() notificationcount: number;
@Input() mute: boolean;

@Output() delete: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  deleteRoom() {
    this.delete.emit(this.roomname);
  }
}


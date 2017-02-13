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
@Input() room_name: string;

@Output() delete: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  deleteRoom() {
    this.delete.emit(this.room_name);
  }
}


import { Input, Output, Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'celebrity-reaction',
  templateUrl: 'celebrity-reaction.html'
})
export class CelebrityReactionComponent {
@Input() heartCount: number;
@Output() watch: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  emitHeart() {
    this.watch.emit();
  }
}

import { Input, Output, Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'twitter-text',
  templateUrl: 'twitter-text.html'
})
export class TwitterTextComponent {
@Input() text: string;
@Output () hashtagClick: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  emitClick(term)
  {
    this.hashtagClick.emit(term);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'message-footer',
  templateUrl: 'message-footer.html'
})
export class MessageFooterComponent {

  text: string;

  constructor() {
    console.log('Hello MessageFooter Component');
    this.text = 'Hello World';
  }

}

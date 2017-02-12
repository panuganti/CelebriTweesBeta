import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';


@Component({
  selector: 'page-direct-message',
  templateUrl: 'direct-message.html'
})
export class DirectMessagePage {
  msgs: any[];
    @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.msgs = [
      {
        content :  'Am I dreaming?Am I dreaming? Am I dreaming?Am I dreaming?Am I dreaming?Am I dreaming?',
        position : 'left',
        time : '10:33 AM',
        senderName : 'Gregory',
        img: ''
      },
      {
        content :  'Am I dreaming? Am I dreaming?Am I dreaming?Am I dreaming? ',
        position : 'right',
        time : '12:55 PM',
        senderName : 'Raj',
        img: ''
      },
      {
        content :  'Am I dreaming?Am I dreaming? Am I dreaming?Am I dreaming?Am I dreaming?Am I dreaming?',
        position : 'left',
        time : '10:33 AM',
        senderName : 'Gregory',
        img: ''
      },
      {
        content :  'Am I dreaming? Am I dreaming?Am I dreaming?Am I dreaming? ',
        position : 'right',
        time : '12:55 PM',
        senderName : 'Raj',
        img: ''
      },
      {
        content :  'Am I dreaming?Am I dreaming? Am I dreaming?Am I dreaming?Am I dreaming?Am I dreaming?',
        position : 'left',
        time : '10:33 AM',
        senderName : 'Gregory',
        img: ''
      },
      {
        content :  'Am I dreaming? Am I dreaming?Am I dreaming?Am I dreaming? ',
        position : 'right',
        time : '12:55 PM',
        senderName : 'Raj',
        img: ''
      },
      {
        content :  'Am I dreaming?Am I dreaming? Am I dreaming?Am I dreaming?Am I dreaming?Am I dreaming?',
        position : 'left',
        time : '10:33 AM',
        senderName : 'Gregory',
        img: ''
      },
      {
        content :  'Am I dreaming? Am I dreaming?Am I dreaming?Am I dreaming? ',
        position : 'right',
        time : '12:55 PM',
        senderName : 'Raj',
        img: ''
      }
    ];
  }

  scrollToBottom() {
    console.log('scrolling to bottom');
    this.content.scrollToBottom(600);
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad DirectMessagesPage');
    this.scrollToBottom();
  }
}

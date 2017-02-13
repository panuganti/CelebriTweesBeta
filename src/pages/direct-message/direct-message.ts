import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
import { AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'page-direct-message',
  templateUrl: 'direct-message.html'
})
export class DirectMessagePage {
  name: string;
  id: string;

  msgs: FirebaseListObservable<any>;
    @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {
    //let name = this.navParams.get('name');
    let id = this.navParams.get('id');

/*
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
      }
    ];
    */
  }

  scrollToBottom() {
    this.content.scrollToBottom(600);
  }

  ionViewDidEnter() {
    //let room_name = '';// this.af.auth.+'_'+this.id;
    //let msgs = this.af.database.list(room_name);
    this.scrollToBottom();
  }
}

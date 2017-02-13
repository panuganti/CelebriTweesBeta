import {Input, Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'notification',
  templateUrl: 'notification.html'
})
export class NotificationComponent {
@Input() avatar: string;
@Input() text: string;
@Input() time: Date;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

}

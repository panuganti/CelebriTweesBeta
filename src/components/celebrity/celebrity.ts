import { Input, Output, Component, EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'celebrity',
  templateUrl: 'celebrity.html'
})
export class CelebrityComponent {
@Output() watch: EventEmitter<string> = new EventEmitter<string>();
@Input() celebImg: string;
@Input() celebName: string;
@Input() id: string;
@Input() heartCount: string;

// imgUrl: string = "https://pbs.twimg.com/profile_images/486132305069477891/aUnjJ9LM_400x400.jpeg";

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  addToWatchlist() {
    this.watch.emit(this.id);
  }

}

import { Component } from '@angular/core';
import { ModalController, NavController} from 'ionic-angular';
import { ComposeDmPage } from '../compose-dm/compose-dm';

@Component({
  selector: 'page-dms',
  templateUrl: 'dms.html'
})
export class DmsPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

  composedm() {
    let modal = this.modalCtrl.create(ComposeDmPage);
    modal.present();
  }

}

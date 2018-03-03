import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  /*
  sayHello()
  {
    window.alert("Hello world!");
  }
  */

  sayHello() {
     let sayHello = this.modalCtrl.create(AboutPage);
     sayHello.present();
  }
}

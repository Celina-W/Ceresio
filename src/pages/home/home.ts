import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';

// importing plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // construct page with imported items
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private barcodeScanner: BarcodeScanner) {}

  // barcode plugin code
  scanBarcode() {
    this.barcodeScanner.scan().then(
    // print barcode data to console
    (barCodeData) => {
      console.log(barCodeData);
    },
    // print error details to console
    (err) => {
      console.log(err);
    }

    );
  }
}


import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';

// importing plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { DataServiceProvider } from '../../providers/data-service/data-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  products: any[] = [];
  selectedProduct: any;
  productFound:boolean = false;

  // construct page with imported items
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private barcodeScanner: BarcodeScanner,
    public dataService: DataServiceProvider
   ) {}

   getBarCodeData() {
   this.dataService.getListDetails()
    .subscribe((response)=> {
      this.products = response.json();
      console.log(this.products);
     });
  }

  // barcode plugin code
  scanBarcode() {
    this.selectedProduct = {};
    this.barcodeScanner.scan().then(
    // print barcode data to console
    (barCodeData) => {
      this.selectedProduct = this.products.find(product => product.plu === barCodeData.text);
      if(this.selectedProduct !== undefined) {
      this.productFound = true;
      console.log(this.selectedProduct.name);
      console.log(barCodeData);
      } else {
      this.productFound = false;
      console.log("barcode data not found");
      console.log(barCodeData);
      console.log(this.products);
      }
    },
    // print error details to console
    (err) => {
      console.log(err);
    }

    );
  }
}

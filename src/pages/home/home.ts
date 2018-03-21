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
  )
  {
    // call function when home page is opened
    this.getBarCodeData();
  }

  getBarCodeData() {
    // call function from data-service.ts
    this.dataService.getListDetails()
   .subscribe((response)=> {
     // store JSON database from function in a variable
     this.products = response.json();
     console.log(this.products);
    });
  }

  // barcode plugin code
  scanBarcode() {
    this.selectedProduct = {};
    this.barcodeScanner.scan().then(
    // print barcode data to console when scan is successful
    (barCodeData) => {
      // check if the barcode numbers match one in the JSON database
      this.selectedProduct = this.products.find(product => product.plu === barCodeData.text);
      // if true, print product name
      if(this.selectedProduct !== undefined) {
        this.productFound = true;
        console.log(this.selectedProduct.name);
        console.log(barCodeData);
      }
      // if false, print error message
      else {
      this.productFound = false;
      console.log("barcode data not found");
      console.log(barCodeData);
      }
    },
    // print error details to console when scan fails
    (err) => {
      console.log(err);
    }

    );
  }
}

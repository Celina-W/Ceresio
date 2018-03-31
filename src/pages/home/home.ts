import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';

import { Platform } from 'ionic-angular';

// importing plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';

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
    public dataService: DataServiceProvider,
    private cameraPreview: CameraPreview,
    private platform: Platform
  )
  {
    // call function when home page is opened
    this.getBarCodeData();
    this.platform.ready().then(() => {
      let options = {
        x: 0,
        y: 0,
        width: window.screen.width,
        height: window.screen.height,
        camera: this.cameraPreview.CAMERA_DIRECTION.BACK,
        toBack: true,
        tapPhoto: false,
        previewDrag: false
      };
      this.cameraPreview.startCamera(options).then(() => {

      })
    });
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

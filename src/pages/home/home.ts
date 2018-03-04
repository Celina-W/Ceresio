import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';

// importing plugins
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // construct page with imported items
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private barcodeScanner: BarcodeScanner) {}

  // map plugin code
  map: GoogleMap;

  ionViewDidLoad() {
   this.loadMap();
  }

 loadMap() {

    // starting map options
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create('map', mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

        // Now you can use all methods safely.
        // Add a marker to the map
        this.map.addMarker({
            title: 'Ionic',
            icon: 'blue',
            animation: 'DROP',
            position: {
              lat: 43.0741904,
              lng: -89.3809802
            }
          })
          // when marker is clicked, create popup alert
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                alert('clicked');
              });
          });

      });
  }


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


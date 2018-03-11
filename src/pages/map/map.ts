import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// importing plugins
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker, MyLocation } from '@ionic-native/google-maps';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  constructor(public navCtrl: NavController) {

  }

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
          lat: 40.6971494,
          lng: -74.2598745
        },
        zoom: 18,4
        tilt: 30
      }
    };

    this.map = GoogleMaps.create('map', mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

        // Get user location
        this.map.getMyLocation()
        .then((location: MyLocation) => {
          console.log(JSON.stringify(location, null ,2));

          // Move the map camera to the location with animation
          return this.map.animateCamera({
            target: location.latLng,
            zoom: 18,
            tilt: 30
          })
        });

        // Now you can use all methods safely.
        // Add a marker to the map
        this.map.addMarker({
            title: 'Example',
            icon: 'blue',
            animation: 'DROP',
            position: {
              lat: 40.6971494,
              lng: -74.2598745
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
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare const google;

const locations = [ { name: 'Sims Municipal Recycling - Sunset Park Material Recovery Facility',
    address: '472 2nd Ave, Brooklyn, NY 11232',
    coordinates: { lat: 40.66025459999999, lng: -74.00535959999999 } },
  { name: 'The 4th Bin',
    address: '708 3rd Ave, New York, NY 10017',
    coordinates: { lat: 40.7524458, lng: -73.97370529999999 } },
  { name: 'Boro-Wide Recycling Corporation',
    address: '3 Railroad Pl, Maspeth, NY 11378',
    coordinates: { lat: 40.7239583, lng: -73.9166011 } },
  { name: 'Lower East Side Ecology Center Electronic Waste Recycling Warehouse',
    address: '469 President St, Brooklyn, NY 11215',
    coordinates: { lat: 40.678498, lng: -73.9875421 } },
  { name: 'Abca Recycling Inc',
    address: '40 McWhirter Rd, Kearny, NJ 07032',
    coordinates: { lat: 40.7663731, lng: -74.1337274 } },
  { name: 'NYC Auto Body',
    address: '2451 1st Avenue, New York, NY 10035',
    coordinates: { lat: 40.8024108, lng: -73.9313437 } },
  { name: 'Metropolitan Recycling',
    address: '847 Shepherd Ave, Brooklyn, NY 11208',
    coordinates: { lat: 40.6637549, lng: -73.8758119 } },
  { name: 'Allocco Recycling Ltd 1',
    address: '540 Kingsland Ave, Brooklyn, NY 11222',
    coordinates: { lat: 40.7347057, lng: -73.94480999999999 } },
  { name: 'Metropolitan Paper Recycling',
    address: '854 Shepherd Ave, Brooklyn, NY 11208',
    coordinates: { lat: 40.6634793, lng: -73.87631720000002 } },
  { name: 'Filco Carting Corp',
    address: '197 Snediker Ave, Brooklyn, NY 11207',
    coordinates: { lat: 40.670398, lng: -73.90097399999999 } },
  { name: 'Allocco Recycling',
    address: '594 Scholes St, Brooklyn, NY 11237',
    coordinates: { lat: 40.7119303, lng: -73.9240452 } },
  { name: 'ERI',
    address: '261 Madison Ave, New York, NY 10016',
    coordinates: { lat: 40.7504971, lng: -73.9806384 } },
  { name: 'Bronx Recycling Center',
    address: '834 St Ann\'s Ave, Bronx, NY 10456',
    coordinates: { lat: 40.821559, lng: -73.90955799999999 } },
  { name: 'New York City Department of Sanitation',
    address: '125 Worth St, New York, NY 10013',
    coordinates: { lat: 40.7157444, lng: -74.002515 } },
  { name: 'EWG Glass Recovery & Recycling Corp.',
    address: '107-28 180th St, Jamaica, NY 11433',
    coordinates: { lat: 40.7025821, lng: -73.7776202 } },
  { name: 'Action Environmental Services',
    address: '315 Casanova St, Bronx, NY 10474',
    coordinates: { lat: 40.8067891, lng: -73.8885365 } },
  { name: 'Action Environmental Services',
    address: '941 Stanley Ave, Brooklyn, NY 11208',
    coordinates: { lat: 40.6635765, lng: -73.8746938 } },
  { name: 'Action Carting',
    address: '300 Frank W Burr Blvd #39, Teaneck, NJ 07666',
    coordinates: { lat: 40.8729637, lng: -74.005332 } },
  { name: 'Sims Municipal Recycling - Sunset Park Material Recovery Facility',
    address: '472 2nd Ave, Brooklyn, NY 11232',
    coordinates: { lat: 40.66025459999999, lng: -74.00535959999999 } },
  { name: 'The 4th Bin',
    address: '708 3rd Ave, New York, NY 10017',
    coordinates: { lat: 40.7524458, lng: -73.97370529999999 } },
  { name: 'Boro-Wide Recycling Corporation',
    address: '3 Railroad Pl, Maspeth, NY 11378',
    coordinates: { lat: 40.7239583, lng: -73.9166011 } },
  { name: 'Lower East Side Ecology Center Electronic Waste Recycling Warehouse',
    address: '469 President St, Brooklyn, NY 11215',
    coordinates: { lat: 40.678498, lng: -73.9875421 } },
  { name: 'Abca Recycling Inc',
    address: '40 McWhirter Rd, Kearny, NJ 07032',
    coordinates: { lat: 40.7663731, lng: -74.1337274 } },
  { name: 'NYC Auto Body',
    address: '2451 1st Avenue, New York, NY 10035',
    coordinates: { lat: 40.8024108, lng: -73.9313437 } },
  { name: 'Metropolitan Recycling',
    address: '847 Shepherd Ave, Brooklyn, NY 11208',
    coordinates: { lat: 40.6637549, lng: -73.8758119 } },
  { name: 'Allocco Recycling Ltd 1',
    address: '540 Kingsland Ave, Brooklyn, NY 11222',
    coordinates: { lat: 40.7347057, lng: -73.94480999999999 } },
  { name: 'Metropolitan Paper Recycling',
    address: '854 Shepherd Ave, Brooklyn, NY 11208',
    coordinates: { lat: 40.6634793, lng: -73.87631720000002 } },
  { name: 'Filco Carting Corp',
    address: '197 Snediker Ave, Brooklyn, NY 11207',
    coordinates: { lat: 40.670398, lng: -73.90097399999999 } },
  { name: 'Allocco Recycling',
    address: '594 Scholes St, Brooklyn, NY 11237',
    coordinates: { lat: 40.7119303, lng: -73.9240452 } },
  { name: 'ERI',
    address: '261 Madison Ave, New York, NY 10016',
    coordinates: { lat: 40.7504971, lng: -73.9806384 } },
  { name: 'Bronx Recycling Center',
    address: '834 St Ann\'s Ave, Bronx, NY 10456',
    coordinates: { lat: 40.821559, lng: -73.90955799999999 } },
  { name: 'New York City Department of Sanitation',
    address: '125 Worth St, New York, NY 10013',
    coordinates: { lat: 40.7157444, lng: -74.002515 } },
  { name: 'EWG Glass Recovery & Recycling Corp.',
    address: '107-28 180th St, Jamaica, NY 11433',
    coordinates: { lat: 40.7025821, lng: -73.7776202 } },
  { name: 'Action Environmental Services',
    address: '315 Casanova St, Bronx, NY 10474',
    coordinates: { lat: 40.8067891, lng: -73.8885365 } },
  { name: 'Action Environmental Services',
    address: '941 Stanley Ave, Brooklyn, NY 11208',
    coordinates: { lat: 40.6635765, lng: -73.8746938 } },
  { name: 'Action Carting',
    address: '300 Frank W Burr Blvd #39, Teaneck, NJ 07666',
    coordinates: { lat: 40.8729637, lng: -74.005332 } },
  { name: 'Sprint Recycling',
    address: '605 W 48th St, New York, NY 10036',
    coordinates: { lat: 40.7650313, lng: -73.9960396 } },
  { name: 'Sims Municipal Recycling - Sunset Park Material Recovery Facility',
    address: '472 2nd Ave, Brooklyn, NY 11232',
    coordinates: { lat: 40.66025459999999, lng: -74.00535959999999 } },
  { name: 'New Colony Enterprise Inc',
    address: '102-17 44th Ave, Corona, NY 11368',
    coordinates: { lat: 40.7470705, lng: -73.8614326 } },
  { name: 'Allocco Recycling',
    address: '594 Scholes St, Brooklyn, NY 11237',
    coordinates: { lat: 40.7119303, lng: -73.9240452 } },
  { name: 'GrowNYC',
    address: '100 Gold St #3300, New York, NY 10038',
    coordinates: { lat: 40.7103318, lng: -74.0032955 } },
  { name: 'AAA Polymer Inc',
    address: '68 Freeman St, Brooklyn, NY 11222',
    coordinates: { lat: 40.7340503, lng: -73.959217 } },
  { name: 'Thrifty Beverages',
    address: '990 McDonald Ave, Brooklyn, NY 11230',
    coordinates: { lat: 40.6295183, lng: -73.9771719 } },
  { name: 'Allocco Recycling Ltd 1',
    address: '540 Kingsland Ave, Brooklyn, NY 11222',
    coordinates: { lat: 40.7347057, lng: -73.94480999999999 } },
  { name: 'North Shore Recycling Inc.',
    address: '34-26 31st St, Long Island City, NY 11106',
    coordinates: { lat: 40.7591111, lng: -73.92806 } },
  { name: 'Fortune Metal Inc',
    address: '239 India St, Brooklyn, NY 11222',
    coordinates: { lat: 40.7327612, lng: -73.9499661 } },
  { name: 'Sims Metal Management',
    address: '3027 Greenpoint Ave, Long Island City, NY 11101',
    coordinates: { lat: 40.737162, lng: -73.9308355 } },
  { name: 'Junk King New York City',
    address: '175 Varick St, New York, NY 10014',
    coordinates: { lat: 40.7274061, lng: -74.00605 } },
  { name: 'CASH 4 CANS REDEMPTION CENTER IN BROOKLYN',
    address: '2462 Linden Blvd, Brooklyn, NY 11208',
    coordinates: { lat: 40.6660635, lng: -73.87277739999999 } },
  { name: '3form, Inc',
    address: '231 W 29th St, New York, NY 10001',
    coordinates: { lat: 40.7486271, lng: -73.9942513 } },
  { name: 'Bronx Recycling Center',
    address: '834 St Ann\'s Ave, Bronx, NY 10456',
    coordinates: { lat: 40.821559, lng: -73.90955799999999 } },
  { name: 'Lower East Side Ecology Center Electronic Waste Recycling Warehouse',
    address: '469 President St, Brooklyn, NY 11215',
    coordinates: { lat: 40.678498, lng: -73.9875421 } },
  { name: 'ERI',
    address: '261 Madison Ave, New York, NY 10016',
    coordinates: { lat: 40.7504971, lng: -73.9806384 } },
  { name: 'T & T Plastic Land Inc.',
    address: '315 Church St, New York, NY 10013',
    coordinates: { lat: 40.719734, lng: -74.0038234 } },
  { name: 'Canal Plastic Center',
    address: '345 Canal St, New York, NY 10013',
    coordinates: { lat: 40.7208226, lng: -74.0034654 } },
  { name: 'Tilcon New York Inc. | Bronx',
    address: '980 E 149th St, Bronx, NY 10455',
    coordinates: { lat: 40.8059678, lng: -73.902644 } },
  { name: 'Tomra The Recycling Center',
    address: '6 Bayswater Blvd, Inwood, NY 11096',
    coordinates: { lat: 40.618362, lng: -73.7517697 } },
  { name: 'Sure We Can',
    address: '219 McKibbin St, Brooklyn, NY 11206',
    coordinates: { lat: 40.7054739, lng: -73.93883 } },
  { name: 'CASH 4 CANS REDEMPTION CENTER IN BROOKLYN',
    address: '2462 Linden Blvd, Brooklyn, NY 11208',
    coordinates: { lat: 40.6660635, lng: -73.87277739999999 } },
  { name: 'Thrifty Beverages',
    address: '990 McDonald Ave, Brooklyn, NY 11230',
    coordinates: { lat: 40.6295183, lng: -73.9771719 } },
  { name: 'New Colony Enterprise Inc',
    address: '102-17 44th Ave, Corona, NY 11368',
    coordinates: { lat: 40.7470705, lng: -73.8614326 } },
  { name: 'ERI',
    address: '261 Madison Ave, New York, NY 10016',
    coordinates: { lat: 40.7504971, lng: -73.9806384 } },
  { name: 'Sims Municipal Recycling - Sunset Park Material Recovery Facility',
    address: '472 2nd Ave, Brooklyn, NY 11232',
    coordinates: { lat: 40.66025459999999, lng: -74.00535959999999 } },
  { name: 'Cartridge World',
    address: '275 7th Ave, New York, NY 10011',
    coordinates: { lat: 40.7455297, lng: -73.9941242 } },
  { name: 'The 4th Bin',
    address: '708 3rd Ave, New York, NY 10017',
    coordinates: { lat: 40.7524458, lng: -73.97370529999999 } },
  { name: 'Sims Metal Management',
    address: '3027 Greenpoint Ave, Long Island City, NY 11101',
    coordinates: { lat: 40.737162, lng: -73.9308355 } },
  { name: 'Boro-Wide Recycling Corporation',
    address: '3 Railroad Pl, Maspeth, NY 11378',
    coordinates: { lat: 40.7239583, lng: -73.9166011 } },
  { name: 'Lower East Side Ecology Center Electronic Waste Recycling Warehouse',
    address: '469 President St, Brooklyn, NY 11215',
    coordinates: { lat: 40.678498, lng: -73.9875421 } },
  { name: 'T D Bottle Can Redemption',
    address: '144 Walworth St, Brooklyn, NY 11205',
    coordinates: { lat: 40.6943352, lng: -73.95441989999999 } },
  { name: 'Mr. T Carting Corp.',
    address: '73-10 Edsall Ave, Glendale, NY 11385',
    coordinates: { lat: 40.7063692, lng: -73.87790210000001 } },
  { name: 'Hugo Neu Corporation',
    address: '120 5th Ave, New York, NY 10011',
    coordinates: { lat: 40.7382295, lng: -73.9922725 } },
  { name: 'Cash 4 Cans & Bottles Recycling',
    address: '14306 94th Ave, Jamaica, NY 11435',
    coordinates: { lat: 40.6980745, lng: -73.8095197 } },
  { name: 'Gershow Recycling Corporation',
    address: '1888 Pitkin Ave, Brooklyn, NY 11212',
    coordinates: { lat: 40.6710412, lng: -73.9031664 } },
  { name: 'Filco Carting',
    address: '197 Snediker Ave, Brooklyn, NY 11207',
    coordinates: { lat: 40.670398, lng: -73.90097399999999 } },
  { name: 'Allocco Recycling Ltd 1',
    address: '540 Kingsland Ave, Brooklyn, NY 11222',
    coordinates: { lat: 40.7347057, lng: -73.94480999999999 } },
  { name: 'Action Environmental Services',
    address: '941 Stanley Ave, Brooklyn, NY 11208',
    coordinates: { lat: 40.6635765, lng: -73.8746938 } } ];




// importing plugins
// import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker, MyLocation } from '@ionic-native/google-maps';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  constructor(public navCtrl: NavController) {

  }

  // map plugin code
  map: any;

  ionViewDidLoad() {
    this.initializeMap();
    // this.loadMap();
  }

  initializeMap() {

    let locationOptions = {timeout: 20000, enableHighAccuracy: true};

    // set starting point to user location
    navigator.geolocation.getCurrentPosition(

        (position) => {

            let options = {
              center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
              zoom: 16,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            }

            var map = new google.maps.Map(document.getElementById("map_canvas"), options);

            // Creating a global infoWindow object that will be reused by all markers
            var infoWindow = new google.maps.InfoWindow();

            // loop through locations list
            for (var i = 0; i < locations.length; i++) {
              addLocation(locations[i]);
            }

            // add a single marker
            function addLocation(location) {
              var latLng = new google.maps.LatLng(location.coordinates.lat, location.coordinates.lng);

              // create a marker and place on map
              var marker = new google.maps.Marker({
                position: latLng,
                map: map,
                title: location.name
                //icon: 'green',
                //animation: 'DROP'
              });

              // add click event for marker
              google.maps.event.addListener( marker, "click", function(e) {
                var contentString = '<div style="width:100%"><h2>' + location.name + '\n</h2><p>' + location.address + '</p></div>';
                infoWindow.setContent( contentString );
                infoWindow.open( map, marker );
              });
            }
        },

        (error) => {
            console.log(error);
        }, locationOptions
    );
  }
}

  /*
  loadMap() {

    // starting map options
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 40.7285696,
          lng: -73.9923936
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
        // Add all markers to the map
        for (var i = 0; i < locations.length; i++) {
          var obj = locations[i];
          this.map.addMarker({
            title: obj.name,
            icon: 'green',
            animation: 'DROP',
            position: {
              lat: obj.coordinates.lat,
              lng: obj.coordinates.lng
            }
          });
          /* POPUPS/INFOWINDOWS WITH ADDRESS TO BE ADDRESSED LATER
          // when marker is clicked, create popup alert
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
            .subscribe(() => {
              alert('clicked');
            });
          });

        }
      });
  }
  */

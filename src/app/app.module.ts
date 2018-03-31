import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { MapPage } from '../pages/map/map';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// importing plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
// import { GoogleMaps } from '@ionic-native/google-maps';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { HttpModule } from '@angular/http';
import { CameraPreview } from '@ionic-native/camera-preview';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    MapPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    MapPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // adding imported plugins
    BarcodeScanner,
    // GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataServiceProvider,
    CameraPreview
  ]
})
export class AppModule {}

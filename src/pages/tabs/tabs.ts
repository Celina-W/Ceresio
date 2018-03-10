import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AboutPage;
  tab2Root = HomePage;
  tab3Root = MapPage;

  constructor() {

  }
}

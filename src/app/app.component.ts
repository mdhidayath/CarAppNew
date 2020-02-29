import { Component,ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AddBuyerPage } from '../pages/add-buyer/add-buyer';
import { AddSellerPage } from '../pages/add-seller/add-seller';
import { TaskListPage } from '../pages/task-list/task-list';
import { LogoutPage } from '../pages/logout/logout';
//import { Push, PushObject, PushOptions } from '@ionic-native/push';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav)nav:Nav;
  rootPage:any = HomePage;

  pages: Array<{title: string,component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();    });

      this.pages = [
        {title:"Enquiries",component:TaskListPage},
        {title:"Add Buyer",component: AddBuyerPage},
        {title:"Add Seller",component: AddSellerPage},
        {title:"Logout",component:LogoutPage},
        
      ]

      

    //  const pushObj: PushObject = this.push.init(options);
    //  pushObj.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));

    //  pushObj.on('registration').subscribe((registration: any) => console.log('Device registered', registration));

    //  pushObj.on('error').subscribe(error => console.error('Error with Push plugin', error)); 
  }

  openPage(page){
    
    if(page.title=='Enquiries'){
      this.nav.setRoot(page.component);
    }
    else{
      this.nav.push(page.component);
    }
  }
}


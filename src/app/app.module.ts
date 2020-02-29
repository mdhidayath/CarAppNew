import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//import {TasksPage} from '../pages/tasks/tasks';
import {AddBuyerPage} from '../pages/add-buyer/add-buyer';
import {AddSellerPage} from '../pages/add-seller/add-seller'
import {HttpClientModule} from '@angular/common/http'
import { SellerEnqCommentsPage } from '../pages/seller-enq-comments/seller-enq-comments';
import { TaskListPage } from '../pages/task-list/task-list';
import { LogoutPage } from '../pages/logout/logout';
import { TaskListPageModule } from '../pages/task-list/task-list.module';
import { RestServicesProvider } from '../providers/rest-services/rest-services';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    //TasksPage,
    AddBuyerPage,
    AddSellerPage,
    //TaskListPage,
    LogoutPage,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TaskListPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    //TasksPage,
    AddBuyerPage,
    AddSellerPage,
    TaskListPage,
    LogoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestServicesProvider
  ]
})
export class AppModule {}

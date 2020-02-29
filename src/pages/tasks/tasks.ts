import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http'
import { SellerEngDtlsPage } from '../seller-eng-dtls/seller-eng-dtls';

/**
 * Generated class for the TasksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {

  taskItems: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
    var result1 = this.httpClient.get('http://internalconsole.com/new/testdata/getdetails.php?function=requests_assigned&agent_id=17&pwd=ims@123&company_id=1')
    result1.subscribe(data=>{
      console.log(data["posts"]);
      debugger;
      this.taskItems = data["posts"];
    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TasksPage');
  }

  TaskDetails(event:any, item:any) {
    console.log(item)
    if(item["request_type"]=="buyer_request") {
      this.navCtrl.push("TaskDetailsPage",{item:item});
    }else if(item["request_type"]=="seller_request") {
      this.navCtrl.push("SellerEngDtlsPage",{item:item});
    }
  }

}

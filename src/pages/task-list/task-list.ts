import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestServicesProvider} from '../../providers/rest-services/rest-services'
/**
 * Generated class for the TaskListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task-list',
  templateUrl: 'task-list.html',
})
export class TaskListPage {
  taskItems: any;
  userid: number;
  password: any;
  companyid: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public restService: RestServicesProvider) {
    this.userid = parseInt(window.localStorage.getItem("userid"));
    this.password = window.localStorage.getItem("password")
    this.companyid = parseInt(window.localStorage.getItem("company_id"))
    this.restService.getTaskList(this.userid,this.password,this.companyid)
    .then(data=>{
      this.taskItems = data["posts"];
    })

    // var result1 = this.httpClient.get('http://internalconsole.com/data/getdetails.php?function=requests_assigned&agent_id='+this.userid+'&pwd='+ this.password+'&company_id='+this.companyid);
    // result1.subscribe(data=>{
    //   console.log(data["posts"]);
    //   debugger;
    //   this.taskItems = data["posts"];
    // })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskListPage');
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

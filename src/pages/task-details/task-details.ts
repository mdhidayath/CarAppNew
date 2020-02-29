import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime } from 'ionic-angular';
import {RestServicesProvider} from '../../providers/rest-services/rest-services'
import { TaskListPage } from '../task-list/task-list';


/**
 * Generated class for the TaskDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task-details',
  templateUrl: 'task-details.html',
})
export class TaskDetailsPage {
  enquiryDetails:any;
  comment:string;
  now = new Date();
  userid: number;
  password: any;
  companyid: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,public restService:RestServicesProvider) {
    this.enquiryDetails = navParams.get('item');
    this.userid = parseInt(window.localStorage.getItem("userid"));
    this.password = window.localStorage.getItem("password")
    this.companyid = parseInt(window.localStorage.getItem("company_id"))
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskDetailsPage');
  }

  precom(id:any){
    console.log(id);
    this.navCtrl.push("BuyerEngCommentsPage",{item:id});
  }

  buyerformupdate(id:any){
    
    if(this.comment === undefined || this.comment==""){
      alert("Comment Field Is Empty");
      return;
    }
    this.restService.updateBuyerEnqComment(this.comment,this.userid,this.password,this.companyid,id)
    .then(data=>{
      if(data["posts"][0].status=="success"){
        alert("Sucessfully updated the comment");
        this.navCtrl.setRoot('TaskListPage')
      }
      else{
        alert("update failed");
      }
    })

    // var result1 = this.httpClient.get('http://internalconsole.com/data/getdetails.php?function=buyer_enq_update&comment='+this.comment+'&agent_id='+this.userid +'&pwd='+this.password+'&company_id='+this.companyid+'&enq_id='+id)
    // result1.subscribe(data=>{
    //     if(data["posts"][0].status=="success"){
    //       alert("Sucessfully updated the comment");
    //       this.navCtrl.setRoot('TaskListPage')
    //     }
    //     else{
    //       alert("update failed");
    //     }
    // }
    // );
  }

}

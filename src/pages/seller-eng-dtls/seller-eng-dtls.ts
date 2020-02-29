import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SellerEnqCommentsPage } from '../seller-enq-comments/seller-enq-comments';
import {RestServicesProvider} from '../../providers/rest-services/rest-services'
import { TaskListPage } from '../task-list/task-list';

/**
 * Generated class for the SellerEngDtlsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seller-eng-dtls',
  templateUrl: 'seller-eng-dtls.html',
})
export class SellerEngDtlsPage {
  sellerEnqDetails:any
  comment:string;
  userid: number;
  password: any;
  companyid: number;
  constructor(public navCtrl: NavController, public navParams: NavParams,public restService:RestServicesProvider) {
    this.sellerEnqDetails = navParams.get('item');
    this.userid = parseInt(window.localStorage.getItem("userid"));
    this.password = window.localStorage.getItem("password")
    this.companyid = parseInt(window.localStorage.getItem("company_id"))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SellerEngDtlsPage');
  }

  precom(id:any){
    this.navCtrl.push("SellerEnqCommentsPage",{item:id});
  }
  sellerformupdate(id:any){
    if(this.comment === undefined || this.comment==""){
      alert("Comment Field Is Empty");
      return;
    }
    this.restService.updateSellerEnqComment(this.comment,this.userid,this.password,this.companyid,id)
    .then(data=>{
      if(data["posts"][0].status=="success"){
        alert("Sucessfully updated the comment");
        this.navCtrl.setRoot('TaskListPage')
      }
      else{
        alert("update failed");
      }
    })

    // var result1 = this.httpClient.get('http://internalconsole.com/data/getdetails.php?function=seller_enq_update&comment='+this.comment+ '&enq_id='+id+'&agent_id='+this.userid+'&pwd='+this.password+'&company_id='+this.companyid)
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

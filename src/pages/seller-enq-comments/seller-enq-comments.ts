import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestServicesProvider} from '../../providers/rest-services/rest-services'

/**
 * Generated class for the SellerEnqCommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seller-enq-comments',
  templateUrl: 'seller-enq-comments.html',
})
export class SellerEnqCommentsPage {
  userid: number;
  password: any;
  companyid: number;
  prevComment:any;
  enqId:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public restService: RestServicesProvider) {
    this.userid = parseInt(window.localStorage.getItem("userid"));
    this.password = window.localStorage.getItem("password")
    this.companyid = parseInt(window.localStorage.getItem("company_id"))
    this.enqId = navParams.get('item')

    this.restService.getSellerComments(this.userid,this.password,this.enqId["taskid"])
    .then(data=>{
      console.log(data["posts"]);
      this.prevComment = data["posts"];
    })
    
    // var result1 = this.httpClient.get('http://internalconsole.com/data/getdetails.php?function=getsellcomments&agent_id='+ this.userid+'&pwd='+ this.password+'&request_id='+this.enqId["taskid"])
    // result1.subscribe(data=>{
    //   console.log(data["posts"]);
    //   this.prevComment = data["posts"];
    // })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SellerEnqCommentsPage');
  }

}

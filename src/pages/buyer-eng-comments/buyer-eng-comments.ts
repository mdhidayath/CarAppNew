import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestServicesProvider} from '../../providers/rest-services/rest-services'

/**
 * Generated class for the BuyerEngCommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buyer-eng-comments',
  templateUrl: 'buyer-eng-comments.html',
})
export class BuyerEngCommentsPage {
  enqId:any
  prevComment:any
  userid:any
  password:any
  companyid:any

  constructor(public navCtrl: NavController, public navParams: NavParams, public restService: RestServicesProvider) {
    this.enqId = navParams.get('item')
    this.userid = parseInt(window.localStorage.getItem("userid"));
    this.password = window.localStorage.getItem("password")
    this.companyid = parseInt(window.localStorage.getItem("company_id"))

    debugger;

    this.restService.getBuyerComments(this.userid,this.password,this.enqId["taskid"])
    .then(data=>{
      console.log(data["posts"]);
      this.prevComment = data["posts"];
    })

    // var result1 = this.httpClient.get('http://internalconsole.com/data/getdetails.php?function=getenqcomments&agent_id=17&pwd=ims@123&request_id=2442')
    // result1.subscribe(data=>{
    //   console.log(data["posts"]);
    //   this.prevComment = data["posts"];
    // })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyerEngCommentsPage');
  }

}

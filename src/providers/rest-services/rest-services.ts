import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestServicesProvider {

  apiUrl = 'http://internalconsole.com/data/getdetails.php';
  constructor(public http: HttpClient) {
    console.log('Hello RestServicesProvider Provider');
  }
  login(username:any,password:any,gcmid:any) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'?function=agent_login&username='+username+'&password='+password+'&device_id='+gcmid).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        alert(JSON.stringify(err));
      });
    });
  }

  getTaskList(userid:any,pwd:any,companyid:any){
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'?function=requests_assigned&agent_id='+userid+'&pwd='+pwd+'&company_id='+companyid).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        alert(JSON.stringify(err));
      });
    });

  }

  updateBuyerEnqComment(comments:any,userid:any,pwd:any,companyid:any,enqid:any){
    comments = comments.replace(/'/g,"\\'")
    return new Promise(resolve =>{
      this.http.get(this.apiUrl+'?function=buyer_enq_update&comment='+comments+'&agent_id='+userid+'&pwd='+pwd+'&company_id='+companyid+'&enq_id='+enqid).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        alert(JSON.stringify(err));
      });
    })
  }
  updateSellerEnqComment(comments:any,userid:any,pwd:any,companyid:any,enqid:any){
    comments = comments.replace(/'/g,"\\'")
    return new Promise(resolve =>{
      this.http.get(this.apiUrl+'?function=seller_enq_update&comment='+comments+'&agent_id='+userid+'&pwd='+pwd+'&company_id='+companyid+'&enq_id='+enqid).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        alert(JSON.stringify(err));
      });
    })
  }

  getBuyerComments(userid:any,pwd:any,enqId:any){
    return new Promise(resolve =>{
      this.http.get(this.apiUrl+'?function=getenqcomments&agent_id='+userid +'&pwd='+pwd+'&request_id='+enqId).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        alert(JSON.stringify(err));
      });
    })
  }

  getSellerComments(userid:any,password:any,enqId:any){
    return new Promise(resolve =>{
      this.http.get(this.apiUrl+'?function=getsellcomments&agent_id='+ userid+'&pwd='+ password+'&request_id='+enqId).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        alert(JSON.stringify(err));
      });
    })
  }

  addBuyer(queryString:any){
    queryString = queryString.replace(/'/g,"\\'")
    return new Promise(resolve =>{
      this.http.get(this.apiUrl+'?function=buyer_request&'+queryString).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        alert(JSON.stringify(err));
      });
    })

  }
  addSeller(queryString:any){
    queryString = queryString.replace(/'/g, "\\'")
    
    return new Promise(resolve =>{
      this.http.get(this.apiUrl+'?function=seller_request&'+queryString).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        alert(JSON.stringify(err));
      });
    })
  }

}


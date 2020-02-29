import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RestServicesProvider} from '../../providers/rest-services/rest-services'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username: string;
  password: string;
  showSpinner = false;
  
  constructor(public navCtrl: NavController, public restService:RestServicesProvider) {
    
    if(window.localStorage.getItem("islogin")=="1"){
      this.navCtrl.push('TasksPage');
    }
    
  }

  login() {
    this.showSpinner = true;
    console.log("username: "+ this.username );
    console.log("password: "+ this.password);
    debugger;
    if(this.username===undefined|| this.username===''||this.password===undefined || this.password===''){
      //this.showSpinner= false;
      alert('Please enter user name and password');

    }
    else{    
        this.restService.login(this.username,this.password,'asdasd')
        .then(data=>{
          //this.showSpinner= false;
          if(data["posts"][0].status=="success"){
                window.localStorage.setItem("usertype","1")
                window.localStorage.setItem("username", data["posts"][0].username);
                window.localStorage.setItem("isLogin", "1");
                window.localStorage.setItem("userid",  data["posts"][0].userid);
                window.localStorage.setItem("password", this.password);
                window.localStorage.setItem("company_id",  data["posts"][0].company_id);
                
                this.navCtrl.setRoot('TaskListPage')
            }
            else{
              alert("Invalid Login");
            }
        });        
    } 
    

  }
  

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime } from 'ionic-angular';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import {RestServicesProvider} from '../../providers/rest-services/rest-services'


/**
 * Generated class for the AddBuyerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-buyer',
  templateUrl: 'add-buyer.html',
  
    
})
export class AddBuyerPage {
  validation_form:FormGroup;
  validation_messages:any;
  dateToday: string;
   customerObj:any=[{
    name:'',
    number:0,
    email:'',
    company:'',
    location:'',
    vehicle1:'',
    varient1:'',
    vehicle2:'',
    varient2:'',
    vehicle3:'',
    year:'',
    notcolor:'',
    notno:'',
    decidtime:'',
    decdate:'',
    finance:'',
    source:'',
    carnot:1,
    custype:1,
    comment:''



  }]
  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder:FormBuilder,public restService:RestServicesProvider) {
    
    this.dateToday = new Date().toISOString();
    
    this.validation_form = this.formBuilder.group({
      custname : new FormControl('',Validators.required),
      contactNo: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(12)
      ])),
      email:new FormControl(),
      company: new FormControl(''),
      location: new FormControl(''),
      vehicle1: new FormControl(''),
      vehicle2: new FormControl (''),
      vehicle3: new FormControl(''),
      variant1: new FormControl(''),
      variant2: new FormControl (''),
      yearAbove: new FormControl(''),
      colorNotPreferred: new FormControl(''),
      numberNotPreferred: new FormControl(''),
      decidingTime: new FormControl('ASAP'),
      finance: new FormControl('Cash'),
      source: new FormControl('Walk-in'),
      carNotAvailable: new FormControl(false),
      customerType: new FormControl('Hot'),
      executivecomments: new FormControl('',Validators.required)
      


    })
    this.validation_messages = {
      'custname': [
        { type: 'required', message: 'Name is required.' }
      ],
      'contactNo':[
        {type: 'required', message: 'Contact number is required'},
        {type: 'minlength', message: 'Contact number cannot be less than 10 digits'},
        {type: 'maxlength',message: 'Number is more than 12 digits'}
      ],
      'executivecomments':[
        {type:'required',message:'Comments required'}
      ]
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddBuyerPage');
  }

  buyerformsubmit(){
    this.customerObj
    debugger;
  }
  onSubmit(values){
     

    var date = new Date();
    var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    alert(str);
    //return
    var CarVailable = 1;
    if(values.value.carNotAvailable==false){
      CarVailable = 1;
    }else{
      CarVailable = 0;
    }

    //return;
    console.log(values);
    console.log(this.customerObj);
    debugger;
    //this.router.navigate(["/user"]);
    var queryString = "name="+values.value.custname+"&email="+values.value.email+"&company="+values.value.company
    +"&location="+values.value.location+"&phone="+values.value.contactNo+"&car1="+values.value.vehicle1+"&year1="+values.value.yearAbove
    +"&colour1="+values.value.colorNotPreferred+"&number1="+values.value.numberNotPreferred+'&car2='+values.value.vehicle2
    +"&year2=&colour2=&number2=&car3="+values.value.vehicle3+"&year=&colour3=&number3=&deciding_time="+values.value.decidingTime
    +"&finance="+values.value.finance+"&source="+values.value.source+"&car_available="+CarVailable+"&comment="+values.value.executivecomments
    +"&customer_type="+values.value.customerType+"&agent_id="+window.localStorage.getItem("userid")+"&pwd="+window.localStorage.getItem("password")
    +"&variant1="+values.value.variant1+"&variant2="+values.value.variant2+"&variant3=&company_id="+window.localStorage.getItem("company_id")
    +"&added_time="+ str
  
    
    //('http://internalconsole.com/data/getdetails.php?function=buyer_request&name='+
    //$scope.cus.name+'&email='+$scope.cus.email+'&company='+$scope.cus.company+'&location='+$scope.cus.location+
    //'&phone='+$scope.cus.number+'&car1='+$scope.cus.vehicle1+'&year1='+$scope.cus.year+'&colour1='+$scope.cus.notcolor+
    //'&number1='+$scope.cus.notno+'&car2='+$scope.cus.vehicle2+'&year2=&colour2=&number2=&car3='+$scope.cus.vehicle3+
    //'&year=&colour3=&number3=&deciding_time='+$scope.cus.decidtime+'&finance='+$scope.cus.finance+'&source='+$scope.cus.source+
    //'&car_available='+$scope.cus.carnot+'&comment='+$scope.cus.comment+'&customer_type='+$scope.cus.custype+
    //'&agent_id='+agentid+'&pwd='+agenpwd+'&variant1='+$scope.cus.varient1+'&variant2='+$scope.cus.varient2+'
    //&variant3=&company_id='+company_id+'&added_time='+added_datetime).then(function(response){

    this.restService.addBuyer(queryString)
    .then(data=>{
      if(data["posts"][0].status=="success")
      {
        alert("Customer added successfully");
      }
      else{
        alert("customer creation faile");
      }
      //alert("Customer added successfully")
    })

      // var result = this.httpClient.get('http://internalconsole.com/data/getdetails.php?function=buyer_request&'+queryString)
      // result.subscribe(data=>{
       
      //    alert("Customer added successfully")
      // },error => {alert(JSON.stringify(error))})
  }

}

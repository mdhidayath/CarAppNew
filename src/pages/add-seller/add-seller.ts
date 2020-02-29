import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import {RestServicesProvider} from '../../providers/rest-services/rest-services'

/**
 * Generated class for the AddSellerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-seller',
  templateUrl: 'add-seller.html',
})
export class AddSellerPage {

  validation_form:FormGroup;
  validation_messages:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder:FormBuilder,public restService:RestServicesProvider) {
    this.validation_form = this.formBuilder.group({
      custname : new FormControl('',Validators.required),
      contactNo: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(12)
      ])),
      email:new FormControl(''),
      company: new FormControl(''),
      location: new FormControl(''),
      vehicle: new FormControl(''),
      regNumber: new FormControl (''),
      variant: new FormControl(''),
      kilometerRun: new FormControl(''),
      color: new FormControl(''),
      OwnerNo: new FormControl(''),
      Insurance: new FormControl(''),
      Validity: new FormControl(''),
      yearOfMfg: new FormControl(''),
      yearOfReg: new FormControl(''),
      Hypoticated: new FormControl(''),
      Fuel: new FormControl('Petrol'),
      decidingTime: new FormControl('ASAP'),
      rcInspected: new FormControl(''),  
      priceExpected: new FormControl(''),    
      source: new FormControl('Walk-in'),
      finance: new FormControl(''),
      warntyFtrs: new FormControl(''),      
      executivecomments: new FormControl('',Validators.required),
      inspectedBy: new FormControl('')


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
    console.log('ionViewDidLoad AddSellerPage');
    
  }

  onSubmit(values){
    console.log(values);
    //this.router.navigate(["/user"]);

    var queryString = "name="+values.value.custname+"&email="+values.value.email+"&company="+values.value.company
    +"&location="+values.value.location+"&phone="+values.value.contactNo+"&vehicle="+values.value.vehicle+"&reg_no="+values.value.regNumber
    +"&variant="+values.value.variant+"&km_run="+values.value.kilometerRun+"&colour="+values.value.color+"&owner_number="+values.value.OwnerNo
    +"&insurance="+values.value.Insurance+"&validity="+values.value.Validity+"&year_mfg="+values.value.yearOfMfg
    +"&year_reg="+values.value.yearOfReg+"&deciding_time="+values.value.decidingTime+"&hypothecated="+values.value.Hypoticated
    +"&fuel="+values.value.Fuel+"&rc_inspected="+values.value.rcInspected+"&price_expected="+values.value.priceExpected
    +"&source="+values.value.source+"&finance="+values.value.finance+"&warranty_features="+values.value.warntyFtrs
    +"&comment="+values.value.executivecomments+"&inspected_by="+values.value.inspectedBy
    +"&photo=photo&agent_id="+window.localStorage.getItem("userid")+"&pwd="+window.localStorage.getItem("password")
    +"&company_id="+window.localStorage.getItem("company_id")
    
    //$http.get('http://internalconsole.com/data/getdetails.php?function=seller_request&name='+$scope.cus.name+'&email='+$scope.cus.email+'&company='+$scope.cus.company+
    //'&location='+$scope.cus.location+'&phone='+$scope.cus.number+'&vehicle='+$scope.cus.vehicle+'&reg_no='+$scope.cus.regno+
    //'&variant='+$scope.cus.varient+'&km_run='+$scope.cus.kmrun+'&colour='+$scope.cus.color+'&owner_number='+$scope.cus.ownerno+
    //'&insurance='+$scope.cus.insurance+'&validity='+$scope.cus.validity+'&year_mfg='+$scope.cus.mfdyear+
    //'&year_reg='+$scope.cus.regyear+'&deciding_time='+$scope.cus.dectime+'&hypothecated='+$scope.cus.hypo+'
    //&fuel='+$scope.cus.fuel+'&rc_inspected='+$scope.cus.rcinspected+'&price_expected='+$scope.cus.price+
    //'&source='+$scope.cus.source+'&finance='+$scope.cus.finance+'&warranty_features='+$scope.cus.waranty+
    //'&comment='+$scope.cus.execomment+'&inspected_by='+$scope.cus.inspectedby+'&photo=photo&agent_id='+agentid+'&pwd=
    //'+agenpwd+'&company_id='+company_id).then(function(response){

    this.restService.addSeller(queryString)
    .then(data=>{
      debugger;
      if(data["posts"][0].status=="success")
      {
        alert("Customer added successfully");
      }
      else{
        alert("customer creation faile");
      }
    })
  }


}

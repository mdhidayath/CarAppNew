import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSellerPage } from './add-seller';

@NgModule({
  declarations: [
    AddSellerPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSellerPage),
  ],
})
export class AddSellerPageModule {}

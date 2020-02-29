import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddBuyerPage } from './add-buyer';

@NgModule({
  declarations: [
    AddBuyerPage,
  ],
  imports: [
    IonicPageModule.forChild(AddBuyerPage),
  ],
})
export class AddBuyerPageModule {}

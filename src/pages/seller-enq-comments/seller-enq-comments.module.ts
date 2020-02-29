import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellerEnqCommentsPage } from './seller-enq-comments';

@NgModule({
  declarations: [
    SellerEnqCommentsPage,
  ],
  imports: [
    IonicPageModule.forChild(SellerEnqCommentsPage),
  ],
})
export class SellerEnqCommentsPageModule {}

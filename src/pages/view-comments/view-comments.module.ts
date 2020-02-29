import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewCommentsPage } from './view-comments';

@NgModule({
  declarations: [
    ViewCommentsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewCommentsPage),
  ],
})
export class ViewCommentsPageModule {}

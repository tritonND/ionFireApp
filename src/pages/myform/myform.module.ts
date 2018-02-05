import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyformPage } from './myform';

@NgModule({
  declarations: [
    MyformPage,
  ],
  imports: [
    IonicPageModule.forChild(MyformPage),
  ],
})
export class MyformPageModule {}

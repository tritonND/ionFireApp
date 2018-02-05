import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LstoragesPage } from './lstorages';

@NgModule({
  declarations: [
    LstoragesPage,
  ],
  imports: [
    IonicPageModule.forChild(LstoragesPage),
  ],
})
export class LstoragesPageModule {}

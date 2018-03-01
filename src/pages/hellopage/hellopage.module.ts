import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HellopagePage } from './hellopage';

@NgModule({
  declarations: [
    HellopagePage,
  ],
  imports: [
    IonicPageModule.forChild(HellopagePage),
  ],
})
export class HellopagePageModule {}

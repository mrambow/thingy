import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';
import { StepperComponent } from './stepper-component/stepper.component';

@NgModule({
  declarations: [
    StepperComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    SwiperModule,
  ],
  exports: [
    StepperComponent
  ]
})
export class StepperModule { }

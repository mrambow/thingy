import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { StepperModule } from '../stepper/stepper.module';
import { StepperTestPage } from './stepper-test.page';

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild( [
      {
        path: '',
        component: StepperTestPage,
      },
    ] ),
    StepperModule,
  ],
  declarations: [StepperTestPage],
} )
export class StepperTestPageModule {
}

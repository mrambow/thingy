import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ModalExampleComponent } from './modal-example/modal-example.component';
import { ModalComponent } from './modal/modal.component';

@NgModule( {
  declarations: [ModalComponent, ModalExampleComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild( [
      {
        path: '',
        component: ModalComponent,
      },
    ] ),
  ],
} )
export class ModalsModule {
}

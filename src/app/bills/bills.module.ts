import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillsRoutingModule } from './bills-routing.module';
import { NewbillComponent } from './newbill.component';
import { AllbillsComponent } from './allbills.component';


@NgModule({
  declarations: [NewbillComponent, AllbillsComponent],
  imports: [
    CommonModule,
    BillsRoutingModule
  ]
})
export class BillsModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewbillComponent } from './newbill.component';
import { AllbillsComponent } from './allbills.component';


const routes: Routes = [
  {
    path: '', component: NewbillComponent,
    children:
      [
        {path: 'allbils', component: AllbillsComponent}

      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillsRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
{

path:'account',
loadChildren:()=>import('./account/account.module').then(m=>m.AccountModule)
  },
  {
    path:'bills',
    loadChildren:()=>import('./bills/bills.module').then(m=>m.BillsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

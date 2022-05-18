import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractInfoComponent } from './contract-info/contract-info.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { FormTDComponent } from './form-td/form-td.component';

const routes: Routes = [
  { path: '', component: FormTDComponent},
  { path: 'template-form', component: FormTDComponent},
  { path: 'reactive-form', component: FormReactiveComponent},
  { path: 'contract-info', component: ContractInfoComponent},
  { path: '**', redirectTo: '/template-form'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

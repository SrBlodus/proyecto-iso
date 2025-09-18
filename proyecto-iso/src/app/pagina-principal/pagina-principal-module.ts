import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaPrincipalRoutingModule } from './pagina-principal-routing-module';
import { Home } from './home/home';
import { Inputbox } from './inputbox/inputbox';
import { Outputview } from './outputview/outputview';


@NgModule({
  declarations: [
    Home,
    Inputbox,
    Outputview
  ],
  imports: [
    CommonModule,
    PaginaPrincipalRoutingModule
  ]
})
export class PaginaPrincipalModule { }

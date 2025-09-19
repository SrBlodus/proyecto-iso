import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaPrincipalRoutingModule } from './pagina-principal-routing-module';
import { Home } from './home/home';
import { ChatInterface } from './chat-interface/chat-interface';


@NgModule({
  declarations: [
    Home,
    ChatInterface
  ],
  imports: [
    CommonModule,
    PaginaPrincipalRoutingModule
  ]
})
export class PaginaPrincipalModule { }

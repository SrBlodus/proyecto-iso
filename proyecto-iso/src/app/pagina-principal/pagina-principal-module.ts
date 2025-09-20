import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  

import { PaginaPrincipalRoutingModule } from './pagina-principal-routing-module';
import { ChatInterface } from './chat-interface/chat-interface';


@NgModule({
  declarations: [
    ChatInterface
  ],
  imports: [
    CommonModule,
    PaginaPrincipalRoutingModule,
    FormsModule
  ]
})
export class PaginaPrincipalModule { }

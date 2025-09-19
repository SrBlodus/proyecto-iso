import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home'
import { ChatInterface } from './chat-interface/chat-interface';

const routes: Routes = [
  { path: 'home', component: Home},
  { path: 'chat', component: ChatInterface}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaPrincipalRoutingModule { }

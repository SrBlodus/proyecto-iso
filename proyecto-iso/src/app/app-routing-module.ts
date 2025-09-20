import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/chat', pathMatch: 'full' }, /* → "Si vas a la raíz, ve a /home" */
    { 
    path: '', 
    loadChildren: () => import('./pagina-principal/pagina-principal-module').then(m => m.PaginaPrincipalModule)
  } /* "Para estas rutas, usa el módulo pagina-principal" (lazy loading)*/ 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

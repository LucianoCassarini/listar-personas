import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { PersonasComponent } from './personas/personas.component';

const routes: Routes = [
  {path:'', component:PersonasComponent},
  {path:'personas', component:PersonasComponent},
  {path:'personas/agregar', component:FormularioComponent},
  {path:'personas/:id', component:FormularioComponent},
  
]

@NgModule({
  imports: [RouterModule.forRoot(
    routes
  )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaystationComponent } from './Componentes/PlayStation/playstation/playstation.component';
import { XboxComponent } from './Componentes/PlayStation/Xbox/xbox/xbox.component';
import { HomeComponent } from './Componentes/home/home.component';
import { FormularioPagoComponent } from './Componentes/formulario-pago/formulario-pago.component';



const routes: Routes = [
  { path: "Playstation", component: PlaystationComponent },
  { path: "Xbox", component: XboxComponent },
  { path: "", component: HomeComponent },
  { path: "formulario", component: FormularioPagoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

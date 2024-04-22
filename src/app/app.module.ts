import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaystationComponent } from './Componentes/PlayStation/playstation/playstation.component';
import { XboxComponent } from './Componentes/PlayStation/Xbox/xbox/xbox.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './Componentes/home/home.component';
import { FormularioPagoComponent } from './Componentes/formulario-pago/formulario-pago.component';



@NgModule({
  declarations: [
    AppComponent,
    PlaystationComponent,
    XboxComponent,
    HomeComponent,
    FormularioPagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

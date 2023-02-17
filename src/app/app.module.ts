import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { AptitudesComponent } from './components/aptitudes/aptitudes.component';
import { LogrosComponent } from './components/logros/logros.component';
import { ExperienciaYEducacionComponent } from './components/experiencia-y-educacion/experiencia-y-educacion.component';
import { AppRoutingModuleTsModule } from './app-routing.module.ts/app-routing.module.ts.module';
import { LogoYRedesComponent } from './components/logo-y-redes/logo-y-redes.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    AptitudesComponent,
    LogrosComponent,
    ExperienciaYEducacionComponent,
    LogoYRedesComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModuleTsModule,
    NgCircleProgressModule.forRoot({})
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

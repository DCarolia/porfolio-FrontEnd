import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes } from '@angular/router';
import { AppComponent } from '../app.component';

const routes: Routes =[ 
   {path: 'inicio', component:AppComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModuleTsModule { }

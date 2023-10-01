import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EssamKonafaComponent } from './components/essam-konafa/essam-konafa.component';
import { AfnanComponent } from './components/afnan/afnan.component';
import { Afnan2Component } from './components/afnan2/afnan2.component';

@NgModule({
  declarations: [
    AppComponent,
    EssamKonafaComponent,
    AfnanComponent,
    Afnan2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

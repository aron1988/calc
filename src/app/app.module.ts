import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CalcInputComponent } from './comps/calc-input/calc-input.component';
import { CalcResultComponent } from './comps/calc-result/calc-result.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcInputComponent,
    CalcResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

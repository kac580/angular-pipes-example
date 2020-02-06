import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PhonenumberPipe } from './phonenumber.pipe';
import { SqrtPipe } from './sqrt.pipe'

@NgModule({
  declarations: [
    AppComponent,
    PhonenumberPipe,
    SqrtPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

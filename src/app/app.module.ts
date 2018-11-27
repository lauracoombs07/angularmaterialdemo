import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { 
  MatCheckboxModule,
  MatRadioModule,
  MatSelectModule 
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClickMeComponent } from './click-me.component';
import { ClickMe2Component } from './click-me2.component';
import {
  KeyUpComponent_v1,
  KeyUpComponent_v2,
  KeyUpComponent_v3,
  KeyUpComponent_v4
} from './keyup.components';
import { LittleTourComponent } from './little-tour.component';
import { LoopbackComponent } from './loop-back.component';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
 
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, 
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule
   // MatToolbarModule,
  ],
  declarations: [
    AppComponent,
    ClickMeComponent,
    ClickMe2Component,
    KeyUpComponent_v1,
    KeyUpComponent_v2,
    KeyUpComponent_v3,
    KeyUpComponent_v4,
    LittleTourComponent,
    LoopbackComponent,
   // MatToolbarRow
   // MatToolbar
  ],
 
  providers: [

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

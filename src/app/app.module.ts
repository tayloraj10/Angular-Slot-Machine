import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';


import { AppComponent } from './app.component';
import { SlotWheelComponent } from './components/slot-wheel/slot-wheel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SlotMachineComponent } from './components/slot-machine/slot-machine.component';
import { BetsComponent } from './components/bets/bets.component';


@NgModule({
  declarations: [
    AppComponent,
    SlotWheelComponent,
    SlotMachineComponent,
    BetsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    NgbModule,
    FontAwesomeModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

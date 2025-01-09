import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { CounterModule } from './counter/components/counter.module';
import { HerosModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
    // CounterComponent,

  ],
  imports: [
    CounterModule,
    HerosModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

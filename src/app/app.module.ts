import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { SecondComponent } from './second/second.component';
import { AComponent } from './second/a/a.component';
import { BComponent } from './second/b/b.component';

import { ThirdComponent } from './third/third.component';
import { CComponent } from './third/c/c.component';
import { DComponent } from './third/d/d.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent,
    SecondComponent, AComponent, BComponent,
    ThirdComponent, CComponent, DComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

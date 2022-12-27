import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FirstMainComponent } from './first-main/first-main.component';
import { SecondMainComponent } from './second-main/second-main.component';
import { FirstMainChildOneComponent } from './first-main-child-one/first-main-child-one.component';
import { FirstMainChildTwoComponent } from './first-main-child-two/first-main-child-two.component';
import { SecondMainChildTwoComponent } from './second-main-child-two/second-main-child-two.component';
import { SecondMainChildOneComponent } from './second-main-child-one/second-main-child-one.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FirstMainComponent,
    SecondMainComponent,
    FirstMainChildOneComponent,
    FirstMainChildTwoComponent,
    SecondMainChildTwoComponent,
    SecondMainChildOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

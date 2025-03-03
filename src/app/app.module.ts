import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { ApplicationDataComponent } from './application-data/application-data.component';
import { DataServiceService } from './data-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PersistenceService } from './persistence.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ApplicationDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    DataServiceService,
    PersistenceService,
    HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

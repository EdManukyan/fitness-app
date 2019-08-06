import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from './material-components/material-module';

import {AppComponent} from './app.component';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {TrainingComponent} from './trainings/training.component';
import {PastTrainingsComponent} from './trainings/past-trainings/past-trainings.component';
import {WelcomeComponent} from './welcome/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    PastTrainingsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

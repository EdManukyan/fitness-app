import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from './material-components/material-module';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AppComponent} from './app.component';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {TrainingComponent} from './trainings/training.component';
import {NewTrainingComponent} from './trainings/new-training/new-training.component';
import {CurrentTrainingComponent} from './trainings/current-training/current-training.component';
import {PastTrainingsComponent} from './trainings/past-trainings/past-trainings.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {HeaderComponent} from './navigation/header/header.component';
import {SideNavListComponent} from './navigation/side-nav-list/side-nav-list.component';
import {StopTrainingComponent} from './trainings/current-training/stop-training.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    NewTrainingComponent,
    CurrentTrainingComponent,
    PastTrainingsComponent,
    WelcomeComponent,
    HeaderComponent,
    SideNavListComponent,
    StopTrainingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [StopTrainingComponent]
})
export class AppModule {
}

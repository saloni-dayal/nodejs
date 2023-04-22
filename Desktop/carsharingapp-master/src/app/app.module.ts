import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { UserprofilesComponent } from './userprofiles/userprofiles.component';
import { RateComponent } from './rate/rate.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './admin/home/home.component';
import { UsersComponent } from './admin/users/users.component';
// import { ProfilesComponent } from './users/profiles/profiles.component';
import { DocumentsComponent } from './user/documents/documents.component';
import { DropdownDirective } from './directves/dropdown-directive.directive';
import { CalendarComponent } from './calendar/calendar.component';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import { PreferencesComponent } from './preferences/preferences.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BookComponent } from './book/book.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    RateComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    UsersComponent,
    DocumentsComponent,
    DropdownDirective,
    CalendarComponent,
    LoginComponent,
    PreferencesComponent,
    BookComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

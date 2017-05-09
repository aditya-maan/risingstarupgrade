import { NgModule,enableProdMode }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// used to create fake backend 
//import { fakeBackendProvider } from './_helpers/index';
//import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';
import 'hammerjs';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService,LocationService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';

import { RegisterComponent } from './registration/app_reg.component';
import { CoachComponent } from './registration/Coach/Coach.component';
import { add_athleteComponent } from './registration/addathlete/add_athlete.component';
import { AthleteComponent } from './registration/Athlete/Athlete.component';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

// import { HeaderComponent }  from './home/header/header.components';
import { FooterComponent }  from './home/footer/footer.components';
import { ProfileComponent } from './profile/profile.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'
import { MaterialModule,MdInputModule } from '@angular/material';
import {ColorPickerModule} from 'angular2-color-picker';
//import { DatepickerModule } from 'angular2-material-datepicker';
import { NgProgressModule } from 'ng2-progressbar';

import { NoopAnimationsModule  } from '@angular/platform-browser/animations';
import { MyDatePickerModule } from 'mydatepicker';
import {ImageUploadModule} from 'angular2-image-upload';
enableProdMode();
@NgModule({
    imports: [
        BrowserModule, NoopAnimationsModule , MdInputModule,
        FormsModule,  ReactiveFormsModule, ImageUploadModule.forRoot(),
        HttpModule, MaterialModule.forRoot(), Ng2Bs3ModalModule, 
        routing, Ng2DatetimePickerModule, ColorPickerModule,NgProgressModule,
        MyDatePickerModule

 
    ],
    exports :[MdInputModule],
    entryComponents: [add_athleteComponent],

    declarations: [
        AppComponent, 
        // HeaderComponent, 
        FooterComponent,
        AlertComponent, ProfileComponent,
        HomeComponent,
        LoginComponent, CoachComponent,AthleteComponent,add_athleteComponent, 
        RegisterComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,LocationService,
        UserService,

        // providers used to create fake backend
       //fakeBackendProvider,
       // MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
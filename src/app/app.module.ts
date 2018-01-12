import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import * as jquery from 'jquery';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
// import { } from 'angularfire2/database';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth-guard.service';
import { environment } from './../environments/environment'
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChatComponent } from './chat/chat.component';

const firebase = {
  apiKey: "AIzaSyAoyYCXvBKCG2UqXvan9KJjK1BRYQS96KA",
  authDomain: "myawesomeproject-3a27f.firebaseapp.com",
  databaseURL: "https://myawesomeproject-3a27f.firebaseio.com",
  projectId: "myawesomeproject-3a27f",
  storageBucket: "myawesomeproject-3a27f.appspot.com",
  messagingSenderId: "500805330974"
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    routing
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularFireModule} from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ListArtisansComponent } from './list-artisans/list-artisans.component';
import { ListProduitsComponent } from './list-produits/list-produits.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule } from '@angular/forms';
import { EditUserComponent } from './edit-user/edit-user.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ListArtisansComponent,
    ListProduitsComponent,
    CreateUserComponent,
    EditUserComponent,


 
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyA5OvGVqdrFwAje6wUOBi8nX5GW_moP3b0",
      authDomain: "fannyedi-b1af6.firebaseapp.com",
      databaseURL: "https://fannyedi-b1af6.firebaseio.com",
      projectId: "fannyedi-b1af6",
      storageBucket: "fannyedi-b1af6.appspot.com",
      messagingSenderId: "234263740915",
      appId: "1:234263740915:web:4e9cbd6d4664c4a0d41286",
      measurementId: "G-Q9ZP67TM1P"
  }),
  CommonModule,
  AngularFirestoreModule,
  FormsModule,
  
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

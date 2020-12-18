import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { NgModule } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
UserAddress: string;
UserEmail: string;
UserGender: String;
UserId: String;
UserImage: String;
UserName: String;
UserNumber: String;
fb;

  constructor(public firebaseService :FirebaseService,private storage: AngularFireStorage,private router: Router) { }
User:any;
selectedFile: File = null;
downloadURL: Observable<string>;
  ngOnInit(): void {
    this.firebaseService.read_Users().subscribe(data => {
    this.User = data.map(e => {
      return {
               User
      };
    })
    console.log(this.User);

  });
  }
  onFileSelected(event) {
    var UserId = Date.now();
    const file = event.target.files[0];
    const filePath = `https://firebasestorage.googleapis.com/v0/b/fannyedi-b1af6.appspot.com/o/${UserId}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`https://firebasestorage.googleapis.com/v0/b/fannyedi-b1af6.appspot.com/o/${UserId}`, file);
    task
      .snapshotChanges()
      .pipe(finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }
  
  
  CreateUser() {
     let User = {};
    User['UserAddress'] = this.UserAddress;
    User['UserEmail'] = this.UserEmail;
    User['UserGender'] = this.UserGender;
   User['UserImage'] = this.UserImage;
    User['UserName'] = this.UserName;
    User['UserNumber'] = this.UserNumber;
    this.firebaseService.create_NewUser(User).then(resp => {
      this.UserAddress = "";
      this.UserEmail = "";
      this.UserGender = "";
     this.UserImage="";
      this.UserNumber="";
      this.UserName="";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }
  
}

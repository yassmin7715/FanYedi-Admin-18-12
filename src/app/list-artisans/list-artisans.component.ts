import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import {AngularFirestore}from '@angular/fire/firestore';
import { FirebaseService } from '../services/firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-artisans',
  templateUrl: './list-artisans.component.html',
  styleUrls: ['./list-artisans.component.css']
})
export class ListArtisansComponent implements OnInit {
  _db:AngularFirestore;
users:Observable<any[]>;

  constructor(db: AngularFirestore,public firebaseService :FirebaseService) {
    this.users = db.collection('User').valueChanges();
  this._db = db; 
  
}
  ngOnInit(): void {
    }
    delete(UserId: string) {
      this.firebaseService.deleteUser(UserId);
    }
  
  }


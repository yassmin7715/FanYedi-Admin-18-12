import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';
import { User } from 'src/app/model/user';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(db: AngularFirestore,public firebaseService :FirebaseService) {
    
  
}
 
  ngOnInit(): void {
  }
  
  update(user: User) {
    this.firebaseService.updateUser(user);
  }
}

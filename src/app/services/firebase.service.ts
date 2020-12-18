import { Injectable } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from'firebase/app';
import { Observable } from 'rxjs';
import{User} from 'src/app/model/user'


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLoggedIn =false 
  constructor(public firebaseAuth:AngularFireAuth, private firestore: AngularFirestore,private router: Router) {}
  
  create_NewUser(User) {
    return this.firestore.collection('User').add(User);
  }

  read_Users() {
    return this.firestore.collection('User').snapshotChanges();
  }

  updateUser(user: User){
    delete user.UserId;
    this.firestore.doc('User/' + user.UserId).update(user);
  }
deleteUser(UserId: string){
  this.firestore.doc('User/' + UserId).delete();
}
  
  async signin(email: string, password: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res =>{
      this.isLoggedIn =true 
      localStorage.setItem('user',JSON.stringify(res.user))
    })
  }
  /*async signup(email: string, password: string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res =>{
      this.isLoggedIn =true 
      localStorage.setItem('user',JSON.stringify(res.user))
    })
  }*/
  logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
    this.router.navigate([''])
  }
  doGoogleLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.firebaseAuth.signInWithPopup(provider)
      .then( res=>{
        resolve(res);
        this.router.navigate(['/home'])
      })
    })
  }
  
}

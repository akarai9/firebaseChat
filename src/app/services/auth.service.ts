import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  user: Observable<firebase.User>;
  userDetails: firebase.User = null;
  details:any = '';
  googleUser:any = '';
  facebookUser:any = '';
  
  constructor(public firebaseAuth: AngularFireAuth, public router: Router) { 
      this.user = firebaseAuth.authState;
      this.user.subscribe(
        (user) => {
          if (user) {
            this.userDetails = user;
            console.log(this.userDetails);
          }
          else {
            this.userDetails = null;
          }
        }
      );
  }
  
  signInWithTwitter() {
    return this.firebaseAuth.auth.signInWithPopup(
        new firebase.auth.TwitterAuthProvider()
      )
  }

  signInWithFacebook() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider())
      .then((res) => { 
        this.facebookUser = res.additionalUserInfo.profile.id;
        localStorage.setItem("loginUserFb",this.facebookUser)
        this.details = res.additionalUserInfo.providerId;
        console.log(res);
          this.router.navigateByUrl('dashboard');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  signInWithGoogle() {
     return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider())
        .then((res) => { 
            this.googleUser = res;
            localStorage.setItem("loginUserG",this.googleUser)
             // debugger
            this.details = res.additionalUserInfo.providerId;
            console.log(this.user,"girghidgdfngkono")
            // debugger
            console.log(res);
              this.router.navigateByUrl('dashboard');
            })
        .catch((err) => console.log(err));
  }

  isLoggedIn() {
    if(!(localStorage.getItem("loginUserFb") || localStorage.getItem("loginUserG")) ) {
        return false;
      } else {
        return true;
      }
  }

  logout() {
    this.firebaseAuth.auth.signOut()
      .then((res) => {
        localStorage.clear();
        this.router.navigate(['/'])
      });
  }
}

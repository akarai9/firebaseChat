import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from '../services/auth.service';
import { HomeComponent } from './../home/home.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[HomeComponent]
})
export class DashboardComponent implements OnInit {

  constructor(public authService:AuthService, public nameService:HomeComponent, public router:Router) { }

  ngOnInit() {
  }

  startChat(){
    this.router.navigateByUrl("chat")
  }
/*
  logout = ()=> {
  	this._firebaseAuth.auth.signOut().then((res) => { console.log(res)}).catch((err) => console.log(err));
  	// userDetails : firebase.User = null;	
  }*/

}

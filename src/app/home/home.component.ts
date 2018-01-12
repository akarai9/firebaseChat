import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { debug } from 'util';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
    title = 'app';

	constructor(public authService:AuthService,public router:Router) { }

	ngOnInit(){}

	signInWithFaceBook(){
		this.authService.signInWithFacebook();
	}

	signInWithGoogle(){		
		this.authService.signInWithGoogle();
	}

	gotoHome = () =>{
		debugger;
		this.router.navigateByUrl('dashboard');
	}

}

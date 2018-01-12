import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Form } from "@angular/forms";
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { debug } from 'util';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
// import {} from 'angularfire2/database';
// import { AngularFire } from 'angularfire2';
import * as firebase from 'firebase/app';
// import { HomeComponent } from './../home/home.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  // providers:[HomeComponent]
})
export class ChatComponent implements OnInit {
 
	// items: FirebaseListObservable<any>;
	user: Observable<firebase.User>;
	items:Array<any> = [];
  sender:boolean = false;
  reciever:boolean = false;
	// myFirebase = new firebase('https://FIREBASE-PROJECTID.firebaseio.com/');
	name: any;
  chatData:any = '';
  senderUser:any = '';
  myFirebase:any;

	constructor(public router:Router, public nameService:AuthService,public af:AngularFireDatabase) {
    // this.user = afAuth.authState;
    // this.items = db.list('items');
    // this.items = af.database.refFromURL({
    //     query: {
    //       limitToLast: 5
    //     }
    //   });
     this.myFirebase = af.database.refFromURL('https://myawesomeproject-3a27f.firebaseio.com');
     // this.startListening();
      // this.af.auth.subscribe(auth => { 
      //   if(auth) {
      //     this.name = auth;
      //   }
      // });
	}
	ngOnInit() {}

  startListening = () => {
      this.myFirebase.on('child_added', function(snapshot) {
        debugger
        let msg = snapshot.val();
      
        let msgUsernameElement = document.createElement("b");
        msgUsernameElement.textContent = msg.username;
        
        let msgTextElement = document.createElement("p");
        msgTextElement.textContent = msg.text;
    
        let msgElement = document.createElement("div");
        msgElement.appendChild(msgUsernameElement);
        msgElement.appendChild(msgTextElement);

        msgElement.className = "msg"
        
        document.getElementById("results").appendChild(msgElement);
      });
    }

	chatSend() {
      if(this.nameService.userDetails.displayName == this.senderUser)
      {
        this.sender = true;
      }
      else{
        this.reciever = false;
      }
    // debugger
      console.log(this.chatData)
      this.items.push({ message: this.chatData, name: this.nameService.userDetails.displayName});      
      let data = this.myFirebase.push({username:this.nameService.userDetails.displayName,text:this.chatData})
      this.chatData = "";
      this.senderUser = "";
      // this.items.set("message",this.chatData);
      // this.items.set("user",this.chatUser);
      // this.items = [];
      console.log(data,this.items);
     this.startListening();

      // this.msgVal = '';
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';
import { ServersService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [ServersService],
})
//https://windows-mashup-angular.web.app
export class AppComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isLoggedIn = null
  constructor(private authService: AuthService){}
  
  ngOnInit(): void {
    this.authService.autoLogin()
    //subscribing the behaviour subject
    this.userSub = this.authService.user.subscribe((user)=>{
      if (user === null) {
        console.log(user)
        this.isLoggedIn=false
      }
      else{
        console.log(user)
        this.isLoggedIn=true
      }
    })

    console.log(this.isLoggedIn)
  }

  onLogout(){
    this.authService.logout()
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }



}
  // message = 'Hello World! This is my  angular supply experience ?';
  // servers : {type:string; name:string; content:string}[] = [];
  // constructor(private serversService: ServersService){
  // }
  // onServerAdded(serverData: { serverName: string; serverContent: string }) {
  //   this.serversService.onServerAdded(serverData);
  // }

  // onBlueprintAdded(serverData: { serverName: string; serverContent: string }) {
    
  //   this.serversService.onBlueprintAdded(serverData);
  // }

  // destroyFirst() {
    
  //   this.serversService.destroyFirst();
  // }

  //code for custom event binding
//   servers = [{
//     type:'server',
//     name:'Anton',
//     content: 'i9+ Overclocked with 2000gigs of RAM',
//   },
//   {
//     type:'blueprint',
//     name:'sony',
//     content:'mara vaazha'
//   }
// ];
// onServerAdded(serverData : {serverName:string; serverContent:string}){
//   this.servers.push({
//     type:'server',
//     name:serverData.serverName,
//     content:serverData.serverContent
//   })
// }
// onBlueprintAdded(serverData:{serverName:string; serverContent:string}){
//   this.servers.push({
//     type:'blueprint',
//     name:serverData.serverName,
//     content:serverData.serverContent
//   })
// }
// destroyFirst(){
//   this.servers.splice(0,1);
// }
//custom event binding ended


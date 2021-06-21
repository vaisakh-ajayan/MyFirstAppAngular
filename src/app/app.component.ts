import { Component } from '@angular/core';
import { ServersService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [ServersService],
})
export class AppComponent {






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


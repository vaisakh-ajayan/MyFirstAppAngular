import { animate, state, style, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ServersService } from '../server.service';

@Component({
  selector: 'app-controlpannel',
  templateUrl: './controlpannel.component.html',
  styleUrls: ['./controlpannel.component.css'],
  
})
export class ControlpannelComponent implements OnInit {

  message = 'Hello World! This is my  angular supply experience ?';
  servers : {type:string; name:string; content:string}[] = [];
  constructor(private serversService: ServersService){
  }
  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serversService.onServerAdded(serverData);
  }

  onBlueprintAdded(serverData: { serverName: string; serverContent: string }) {
    
    this.serversService.onBlueprintAdded(serverData);
  }

  destroyFirst() {
    
    this.serversService.destroyFirst();
  }
  ngOnInit(): void {
  }

}

import { Component, Directive, OnInit } from '@angular/core';
import { ServersService } from '../server.service';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers : {type:string; name:string; content:string; created_on:Date}[] = [];
  constructor(private serverService: ServersService) {
    this.servers = this.serverService.servers;
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  //data binding
  // allowServer : boolean = false;  //enable disable btn-property binding
  // serverCreatedStatus : string = 'No server was created'; //whether server created-event binding
  // serverName : string = '';   //two way binding using ngModel
  // inName : string = '';
  // serverCreated : boolean = false;  //ngIf directive check
  // servers : string[] =['Test1', 'Test2'];
  // constructor() {
  //   setTimeout(() => {
  //     this.allowServer=true;
  //   }, 2000);

  // }

  // ngOnInit(): void {
  // }
  // onCreateServer(){
  //   this.serverCreated = true;
  //   this.servers.push(this.serverName);
  //   //this.serverCreatedStatus = 'server is created & name is ' + this.serverName;
  // }

}



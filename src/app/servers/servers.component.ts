import { animate, state, style, transition } from '@angular/animations';
import { Component, Directive, OnInit } from '@angular/core';
import { ServersService } from '../server.service';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  // bad output on animations
//   animations: ['list',[
//     state(
//       'in',
//       style({
//         opacity: 1,
//         transform: 'translateX(0px)'
//       })
//     ),
//     transition('void=>*',[
//       style({
//         opacity: 0,
//         transform: 'translateX(-100px)'
//       }),
//       animate(600),
//     ]),
//     transition("*=>void",[
//       animate(
//         500,
//         style({
//           backgroundColor: 'white',
//           transform: 'translateX(50px)',
//         })
//       ),
//       animate(
//         600,
//         style({
//           opacity: 0,
//           transform: 'translateX(-150px)'
//         })
//       )
//     ])
//   ]
// ]
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



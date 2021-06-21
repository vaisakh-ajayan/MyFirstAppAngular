import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector : '.app-server',
    templateUrl : 'server.component.html',
    styles : [
        `.online{
            color:white;
        },
        .offline{
            color:yellow;
        }
        `,
    ],
})
export class ServerComponent implements OnInit{
    serverId:number=10;
    serverStatus : string = 'offline';
    
    @Input() element : {type:string, name:string, content:string};
    
    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
        console.log("constructor called")
    }
    getServerStatus(){
        return this.serverStatus;
    }

    getColorStatus(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

    //lifecycle hooks
    ngOnInit(){
        console.log("ngOnInit has called");
    }

    ngOnChanges(changes : SimpleChanges){
        console.log("ngOnChanges has called");
        console.log(changes);
    }

    ngDoCheck(){
        console.log("ngDoCheck is called");
    }

    ngAfterContentInit(){
        console.log("ngAfterContentInit is called");
    }

    ngAfterContentChecked() {
        console.log('ngAfterContentChecked is called');
      }

    ngAfterViewInit() {
        console.log('ngAfterViewInit is called');
      }
    
      ngAfterViewChecked() {
        console.log('ngAfterViewChecked is called');
      }

    ngOnDestroy() {
        console.log('ngOnDestroy is called');
      }
}
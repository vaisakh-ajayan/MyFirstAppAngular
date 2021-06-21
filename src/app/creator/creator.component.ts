import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {
  serverName : string = '';
  serverContent : string = '';
  //1. creating event emitter objects
  @Output() serverCreated = new EventEmitter<{
    serverName:string;
    serverContent:string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    serverName:string;
    serverContent:string;
  }>();

  //2. emit the event emitter obj created when the event raises
  onServerAdded(){
    this.serverCreated.emit({
      serverName:this.serverName,
      serverContent:this.serverContent
    });
  }
  onBlueprintAdded(){
    this.blueprintCreated.emit({
      serverName:this.serverName,
      serverContent:this.serverContent
    });
  }
  constructor() { }

  ngOnInit(): void {
  }

}

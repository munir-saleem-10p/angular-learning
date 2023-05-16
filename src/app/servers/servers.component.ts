import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', //default. usage <app-server></app-server>

  // selector: '[app-servers]', // by applying square brackets we are using selector as attribute on HTML elements like div.

  // selector: '.app-servers', // we can also use it with .(dot) and can also use as css selector. usage <div class="app-servers"></div>. Info by id is not supported by angular.

  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  addNewServer: boolean = false;
  serverStatus: string = "Server is not available";
  serverName : string = '';
  isAlertError:boolean =  false;

  constructor() {
    // setTimeout(() => {
    //   this.addNewServer = true;
    // }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer(){

    if(this.serverName){
      this.isAlertError = false;
      this.serverStatus = `Server with name "${this.serverName}" is created`;
    }else{
      this.isAlertError = true;
      this.serverStatus = 'Invalid Server name';
    }
  }

  onChange(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

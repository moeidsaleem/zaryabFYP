import { Component, AfterViewInit , ElementRef, ViewChild } from '@angular/core';
import { WebrtcService } from './webrtc.service';

import {AccordionModule} from 'primeng/primeng';     //accordion and accordion tab
import {MenuItem} from 'primeng/primeng';            //api


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit  {

  @ViewChild('local') local;
  @ViewChild('remote') remote;
  
  constructor(private rtc:WebrtcService,private elementRef:ElementRef){
    // var local = this.elementRef.nativeElement.querySelector('#local');
    

  }
  title = 'app';
  roomId='123';
 
  socket:any = null;
  element;
  
  
  ngAfterViewInit(){
    // let loc = this.local.nativeElement;
    // let rem = this.remote.nativeElement;

  }


  openRoom(){
    console.log('final roomId , starting room with  ' +this.roomId)
       this.rtc.connection.open(this.roomId);
}

joinRoom(){
console.log(this.roomId);
// this.connection.checkPresence(this.roomId, function(isRoomExist, roomid) {
// if (isRoomExist === true) {
 this.rtc.connection.join(this.roomId);


// } else {
//   console.log('Error! Room Id not found!');
// }
// });

}

}

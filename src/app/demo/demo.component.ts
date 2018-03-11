import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WebrtcService } from '../webrtc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  url = 'https://localhost:4200/demo';

  constructor(private router:Router,private rtc:WebrtcService,private elementRef:ElementRef) {
   
    this.rtc.connection.onstream = function(event){
      let x = document.getElementById('local');
      let y = document.getElementById('remote');
      if(event.type === 'remote'){
        console.error('remote event');
        y.appendChild(event.mediaElement);

      }else if( event.type === 'local'){
        console.log('local event');
        x.appendChild(event.mediaElement);
      }

    }
   }
  @ViewChild('local') local;
  @ViewChild('remote') remote;
  started:boolean = false;


  ngOnInit() {
   
  }
  rand5 = function() {
    return(Math.floor(Math.random() * 5*2) + 2003 *32)
  };
  roomId ='atrix';

  goJoin(){
    // this.router.(['/demo', this.roomId])
  }

  joinRoom(){
    this.rtc.join(this.roomId);
    // let x = document.getElementById('local');
    // let y = document.getElementById('remote');
    // this.rtc.connection.onstream = function(event){
    //   if(event.type === 'remote'){
    //     console.log('remote event');
    //     y.appendChild(event.mediaElement);

    //   }else if( event.type === 'local'){
    //     console.log('local event');
    //     x.appendChild(event.mediaElement);
    //   }

    // }
  }
  openRoom(){
    // console.log('final roomId , starting room with  ' +this.roomId)
    this.started=true;
       this.rtc.open(this.roomId);
     
       
}


}

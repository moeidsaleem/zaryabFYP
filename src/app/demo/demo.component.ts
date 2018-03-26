import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WebrtcService } from '../webrtc.service';
import { Router } from '@angular/router';
import RecordRTC from 'recordrtc/RecordRTC.min';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  url = 'https://localhost:4200/demo';
x;
y;
@ViewChild('div') div;
recorder:any;
streamx:string;
  constructor(private router:Router,private rtc:WebrtcService,private elementRef:ElementRef) {
   

    this.rtc.connection.onstream = function(event){
      this.x = document.getElementById('local');
      this.y = document.getElementById('remote');
      this.video
      

  

      setTimeout(()=>{
        console.log(event.streamid);
        this.recorder = RecordRTC(event.stream);
  //start recording
       this.recorder.startRecording({
        video:false,
        audio:true
      });
      },1000);
      var video;

      setTimeout(()=>{
        console.log(event.streamid);
        this.recorder.stopRecording(function(blob){
          console.log(blob);   
        
          
        })
      },6000);
      
      if(event.type === 'remote'){
        console.error('remote event');
        this.y.appendChild(event.mediaElement);
        console.log('remote')

      }else if( event.type === 'local'){
      //  console.log('local event');
        this.x.appendChild(event.mediaElement);
      }
    }

   }


  started:boolean = false;
  ngOnInit() {
   
  }
  rand5 = function() {
    return(Math.floor(Math.random() * 5*2) + 2003 *32)
  };
  roomId;



  joinRoom(){
    this.rtc.join(this.roomId);
  }
  valuex=2;
  openRoom(){

    this.started=true;
    this.rtc.open(this.roomId);  
}



stopRoom(){
  this.rtc.loading =true;
  this.rtc.connection.close();  
setTimeout(()=>{
  this.rtc.loading=false;
  this.started =false;
  //this.router.navigate(['/result']);
},1000);
}


}

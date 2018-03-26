import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { WebrtcService } from '../webrtc.service';
import { Router } from '@angular/router';
import RecordRTC from 'recordrtc/RecordRTC.min';

@Component({
  selector: 'record-rtc',
  templateUrl: './record-rtc.component.html',
  styleUrls: ['./record-rtc.component.scss']
})
export class RecordRTCComponent implements AfterViewInit{

  private stream: MediaStream;
  private recordRTC: any;
  completed=false;

  @ViewChild('video') video;

  constructor(private router:Router,private rtc:WebrtcService,private elementRef:ElementRef) {
   

    this.rtc.connection.onstream = function(event){
      this.x = document.getElementById('local');
      this.y = document.getElementById('remote');
 

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
    setTimeout(()=>{
      this.startRecording();
    },2000)      
}
stopRoom(){
  // this.rtc.loading =true;
  this.rtc.connection.close();  
  this.stopRecording();

setTimeout(()=>{
  this.rtc.loading=false;
  this.started =false;
  //this.router.navigate(['/result']);
},1000);
}



// RECORD_RTC

  ngAfterViewInit() {
    // set the initial state of the video
    let video:HTMLAudioElement = this.video.nativeElement;
    video.muted = false;
    video.controls = true;
    video.autoplay = false;
  }

  toggleControls() {
    let video: HTMLAudioElement = this.video.nativeElement;
    video.muted = !video.muted;
    video.controls = !video.controls;
    video.autoplay = !video.autoplay;
  }

  successCallback(stream: MediaStream) {

    var options = {
      mimeType: 'audio/webm', // or video/webm\;codecs=h264 or video/webm\;codecs=vp9
      audioBitsPerSecond: 128000,
   //   videoBitsPerSecond: 128000,
      bitsPerSecond: 128000 // if this line is provided, skip above two
    };
    this.stream = stream;
    this.recordRTC = RecordRTC(stream, options);
    this.recordRTC.startRecording();
    let video: HTMLAudioElement = this.video.nativeElement;
    video.src = window.URL.createObjectURL(stream);
    this.toggleControls();
  }

  errorCallback() {
    //handle error here
  }

  processVideo(audioVideoWebMURL) {
    let video: HTMLAudioElement = this.video.nativeElement;
    let recordRTC = this.recordRTC;
    video.src = audioVideoWebMURL;
    this.toggleControls();
    var recordedBlob = recordRTC.getBlob();
    recordRTC.getDataURL(function (dataURL) {
      console.log(dataURL);
     });
  }

  mediaConstraints;
  startRecording() {
    this.mediaConstraints = {
      video: false, audio: true
    };
    navigator.mediaDevices
      .getUserMedia(this.mediaConstraints)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));


  }

  stopRecording() {
    let recordRTC = this.recordRTC;
    recordRTC.stopRecording(this.processVideo.bind(this));
    let stream = this.stream;
    stream.getAudioTracks().forEach(track => track.stop());
    stream.getVideoTracks().forEach(track => track.stop());
    this.completed =true;
  setTimeout(()=>{
    this.download();
  },2000)  
  }

  download() {
    this.recordRTC.save('./assets/video.webm');
   
  }
}

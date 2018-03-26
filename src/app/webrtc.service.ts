import { Injectable } from '@angular/core';
declare var RTCMultiConnection: any;

@Injectable()
export class WebrtcService {
  connection;
  recorder;
  loading =false
  constructor() { 
    //webRTC 
    this.connection = new RTCMultiConnection();
    this.connection.socketURL = 'https://rtcmulticonnection.herokuapp.com:443/';
    // this.connection.socketMessageEvent = 'audio-plus-screen-sharing-demo';

  }


  join(id){
    this.connection.session = {
      audio: true,
      video: false,
     // data: true
  };

  this.connection.mediaConstraints = {
      audio: true,
      video: false
  };

  this.connection.sdpConstraints.mandatory = {
      OfferToReceiveAudio: true,
      OfferToReceiveVideo: false
  };

  this.connection.dontCaptureUserMedia = true;
    this.connection.join(id);
  }
  



  open(id){
    this.connection.session = {
      audio: true,
      video: false,
      //data: true
  };
  this.connection.mediaConstraints = {
      audio: true,
      video: false
  };
  this.connection.sdpConstraints.mandatory = {
      OfferToReceiveAudio: true,
      OfferToReceiveVideo: false
  };
    this.connection.open(id);
  }


  stopRecording(id){
    this.connection.close();
   return this.recorder[id].stopRecording();

  }


  // The main service for WebRTC 


  
}

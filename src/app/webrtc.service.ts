import { Injectable } from '@angular/core';
declare var RTCMultiConnection: any;

@Injectable()
export class WebrtcService {
  connection;
  constructor() { 
    //webRTC 
    this.connection = new RTCMultiConnection();
    this.connection.socketURL = 'https://rtcmulticonnection.herokuapp.com:443/';
    this.connection.socketMessageEvent = 'audio-plus-screen-sharing-demo';
    this.connection.session = {
        audio: 'two-way', // merely audio will be two-way, rest of the streams will be oneway
        video: false,
        //oneway: true
         };
         this.connection.sdpConstraints.mandotory = {
      OfferToReceiveAudio:true,
      OfferToReceiveVideo:false
    };
    this.connection.getScreenConstraints = function(callback) {
      this.getScreenConstraints(function(error, screen_constraints) {
          if (!error) {
              screen_constraints = this.connection.modifyScreenConstraints(screen_constraints);
              callback(error, screen_constraints);
              return;
          }
          throw error;
      });
  };    
  
  }


  join(id){
    this.connection.session = {
      audio: true,
      video: false,
      data: true
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
      data: true
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

     
  onStream(loc,rem){
    this.connection.onstream = function(event){
      console.log('oooonnn stream')
      if(event.type === 'remote'){
        console.log(event.mediaElement);        
      // rem.appendChild(event.mediaElement);
      }
      if(event.type === 'local'){
        console.log('local video')
      console.log(event.mediaElement);
      //loc.appendChild(event.mediaElement);
     // element.innerHTML ='<video src="'+event.mediaElement.src+'"></video>';
     // element.innerHTML ='adas'
      
      }
    
     }
  }

  // The main service for WebRTC 


  
}

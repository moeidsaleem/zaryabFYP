import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { WebrtcService } from '../webrtc.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

roomId;
message;
url = 'https://ec2-13-229-128-0.ap-southeast-1.compute.amazonaws.com:8000';
  constructor(private router:Router,private route:ActivatedRoute, private rtc:WebrtcService) { 
    this.roomId =this.route.snapshot.params.id;
    this.rtc.connection.onstream = function(event){
      // let x = document.getElementById('local');
      let y = document.getElementById('remote');
      if(event.type === 'remote'){
        console.error('remote event');
        y.appendChild(event.mediaElement);

      }else if( event.type === 'local'){
        console.log('local event');
       // x.appendChild(event.mediaElement);
      }

    }
    console.log(this.roomId);
    this.message ='ROOM ID:'+this.roomId;
    this.join();


  }

  ngOnInit() {

  }

  join(){
    this.rtc.join(this.roomId);
  }
}

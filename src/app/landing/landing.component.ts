import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }
images;
  ngOnInit() {
    this.images = [];
    this.images.push({source:'assets/1.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.images.push({source:'assets/2.jpg', alt:'Description for Image 2', title:'Title 2'});

  }

}

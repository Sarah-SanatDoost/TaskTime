import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-leaving-work',
  templateUrl: './dialog-leaving-work.component.html',
  styleUrls: ['./dialog-leaving-work.component.css']
})
export class DialogLeavingWorkComponent implements OnInit {

 


  constructor() { }
  
  rating2:number=0 ;
 
  description = "";
  ngOnInit(): void {
  }
  // onRatingSet(rating: number): void {
  //   console.log(rating)
  // }

}

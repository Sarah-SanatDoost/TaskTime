import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import * as moment from 'jalali-moment';
import { interval, takeUntil, timer } from 'rxjs';
import { DialogLeavingWorkComponent } from './dialog-leaving-work/dialog-leaving-work.component';

@Component({
  selector: 'app-current-work-day',
  templateUrl: './current-work-day.component.html',
  styleUrls: ['./current-work-day.component.css']
})
export class CurrentWorkDayComponent implements OnInit {

  progressbarValue = 0;
  curSec: number = 0;

  startTimer(seconds: number) {
    // const time = seconds;
    const timer$ = interval(1000);

    const sub = timer$.subscribe((sec) => {
      this.progressbarValue = 0 + sec * 100 / seconds;
      this.curSec = sec;

      if (this.curSec === seconds) {
        sub.unsubscribe();
      }
    });
  }

  constructor( public dialog: MatDialog ) { }

  ngOnInit(): void {

  }

  public onOpenDialog(){
    this.dialog.open(DialogLeavingWorkComponent ,
      { panelClass: 'custom-container' });
  }
  // timeLeft: number = 60;
  // interval: string | number | NodeJS.Timer | undefined;

  // startTimer() {
    // this.interval = setInterval(() => {
    //   if (this.timeLeft > 0) {
    //     this.timeLeft--;
    //   } else {
    //     this.timeLeft = 60;
    //   }
    // }, 1000)


  // }

  // setInterval(function () {element.innerHTML += "Hello"}, 1000);

}
//    currentDate = new Date();
//  startOfNextMinute = new Date(
//   this.currentDate.getFullYear(),
//   this.currentDate.getMonth(),
//   this.currentDate.getDate(),
//   this.currentDate.getHours(),
//   this.currentDate.getMinutes() + 1

  
// );


//  source = interval(1000);
 
//  result = this.source.pipe(
//   takeUntil(timer(this.startOfNextMinute))
// );

// }
// console.log(moment().format('LT'))












// progressbarValue = 100;
// curSec: number = 0;

// startTimer(seconds: number) {
//   const time = seconds;
//   const timer$ = interval(1000);

//   const sub = timer$.subscribe((sec) => {
//     this.progressbarValue = 100 - sec * 100 / seconds;
//     this.curSec = sec;

//     if (this.curSec === seconds) {
//       sub.unsubscribe();
//     }
//   });
// }
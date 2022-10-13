import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import * as moment from 'jalali-moment';
import { interval, takeUntil, timer } from 'rxjs';
// import { TimeBars } from 'src/app/interfaces/time-bars';
import { DialogLeavingWorkComponent } from './dialog-leaving-work/dialog-leaving-work.component';

interface task {
  startTime: number;
  endTime: Date;
  status: status
}

  export enum color {
  '#61cf4f',
  '#fc8f8f',
  '#9f9f9f'
}
interface status {
  color: color;
}

@Component({
  selector: 'app-current-work-day',
  templateUrl: './current-work-day.component.html',
  styleUrls: ['./current-work-day.component.css']
})





export class CurrentWorkDayComponent implements OnInit {

  // tasks: task[] =[
  // {startTime : this.totalPercent , endTime: Date.now , status: }
  // ]

  @Output() startWork = new EventEmitter();
  @Input() myValue: any;
  // @Input() isclicked :boolean = false;

  constructor(public dialog: MatDialog) { }

  progressbarValue = 0;
  curSec: number = 0;
  rest: boolean = false;
  d = new Date();
  H = this.d.getHours();
  M = this.d.getMinutes();
  time = this.H + ":" + this.M;
  // ===========================
  hours = this.H * 60
  minutes = this.M
  totalPercent = (this.hours + this.minutes) * 100 / 1440;

  // bars:TimeBars[] =[
  // {startTime: 9:10 , endTime: 17 }
  // ]


  ngOnInit(): void {

  }

  public onOpenDialog() {
    this.dialog.open(DialogLeavingWorkComponent,
      { panelClass: 'custom-container' });
  }

  public onStart(e: Event) {
    this.startWork.emit(e)
  }


  startTimer() {
    const seconds: number = 60;
    const timer$ = interval(1000);

    const sub = timer$.subscribe((sec) => {
      this.progressbarValue = sec * 100 / seconds;
      this.curSec = sec;

      if (this.curSec === seconds) {
        sub.unsubscribe();
      }
    });
  }

  startGreen() {

  }
  startRed() {

  }



  // ngOnChanges(changes: SimpleChanges) {
  //   if(changes && changes['myValue']) {
  //     this.onStart(e);
  //   }
}
//  this.isclicked = e.changed

//   public updateColor() {
// if (this.rest === true){
//   return 'warn';
// }else{
//   return 'primary';
// }
//   }

import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  progressbarValue = 0;
  curSec: number = 0;
  rest: boolean = false;


  startTimer() {
    const seconds:number = 60;
    const timer$ = interval(1000);

    const sub = timer$.subscribe((sec) => {
      this.progressbarValue = 0 + sec * 100 / seconds;
      this.curSec = sec;

      if (this.curSec === seconds) {
        sub.unsubscribe();
      }
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { interval, takeUntil, timer } from 'rxjs';
import { EunitSectionColor } from 'src/app/const/const';
import { IUnitInfo } from 'src/app/interfaces/unit-info.interface';
import { TaskStatusService } from 'src/app/task-status.service';
import { SectionComponent } from '../user-progress-bar/section/section.component';
import { UnitComponent } from '../user-progress-bar/section/unit/unit.component';
import { UserProgressBarComponent } from '../user-progress-bar/user-progress-bar.component';
import { DialogLeavingWorkComponent } from './dialog-leaving-work/dialog-leaving-work.component'


@Component({
  selector: 'app-current-work-day',
  templateUrl: './current-work-day.component.html',
  styleUrls: ['./current-work-day.component.css'],
  providers: [SectionComponent]
})

export class CurrentWorkDayComponent implements OnInit {

  startWork: EventEmitter<IUnitInfo> = new EventEmitter<IUnitInfo>();

  constructor(public dialog: MatDialog, private userProgressBarComponent: UserProgressBarComponent, public taskStatus: TaskStatusService) { }



  progressbarValue = 0;
  curSec: number = 0;
  d = new Date();
  H = this.d.getHours();
  M = this.d.getMinutes();
  time = this.H + ":" + this.M;
  // ===========================
  hours = this.H * 60
  minutes = this.M
  totalPercent = (this.hours + this.minutes) * 100 / 1440;
  disabledWork:boolean= false;


  ngOnInit(): void {
    const unitInfo = {
      color: EunitSectionColor.GRAY
    } as IUnitInfo;
    this.taskStatus.unitInfo = unitInfo;
  }


  public onOpenDialog() {
    this.dialog.open(DialogLeavingWorkComponent,
      { panelClass: 'custom-container' });
  }

  onStartWork() {
    const unitInfo = {
      color: EunitSectionColor.GREEN
    } as IUnitInfo;
    this.taskStatus.unitInfo = unitInfo;


    // this.userProgressBarComponent.createComponent();
    document.getElementById('taskbar')?.click();
  
  }


}







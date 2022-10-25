import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { interval, takeUntil, timer } from 'rxjs';
import { EunitSectionColor } from 'src/app/const/const';
import { IUnitInfo } from 'src/app/interfaces/unit-info.interface';
import { ShowTimeService } from 'src/app/show-time.service';
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

  constructor(public dialog: MatDialog, private userProgressBarComponent: UserProgressBarComponent, public taskStatus: TaskStatusService,
    public showTime: ShowTimeService  ) { }



  progressbarValue = 0;
  curSec: number = 0;
  d = new Date();
  H = this.d.getHours() * 60;
  M = this.d.getMinutes();
  time = this.H +  this.M;

 
  ngOnInit(): void {
    const unitInfo = {
      color: EunitSectionColor.GRAY
    } as IUnitInfo;
    this.taskStatus.unitInfo = unitInfo;
    this.taskStatus.setSectionIndex();
  }


  public onOpenDialog() {
    this.dialog.open(DialogLeavingWorkComponent,
      { panelClass: 'custom-container' });
  }

  onStartWork() {
    this.taskStatus.disabledWork =true;
    this.taskStatus.disabledRest = false;

    // this.showTime.workTimes.push(Math.floor(this.taskStatus.unitIndex / 60)+ ':' + this.taskStatus.unitIndex %60 +'-w')
    // this.showTime.workTimes.push(this.taskStatus.unitIndex +'-w')
    this.taskStatus.setSectionIndex();
    
    const unitInfo = {
      color: EunitSectionColor.GREEN
    } as IUnitInfo;
    this.taskStatus.unitInfo = unitInfo;

    document.getElementById('task1')?.click();

  }

  onStartRest() {
    this.taskStatus.disabledRest = true;
    this.taskStatus.disabledWork = false;
    
    // this.showTime.workTimes.push(this.taskStatus.h + ':' + this.taskStatus.m +'-r')
    this.showTime.workTimes.push(Math.floor(this.taskStatus.unitIndex / 60)+ ':' + this.taskStatus.unitIndex %60 +'-r')
    this.taskStatus.setSectionIndex();
    const unitInfo = {
      color: EunitSectionColor.RED
    } as IUnitInfo;

    this.taskStatus.unitInfo = unitInfo;

    document.getElementById('task2')?.click();
  }

}










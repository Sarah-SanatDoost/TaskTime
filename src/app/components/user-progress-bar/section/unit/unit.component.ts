import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TaskStatusService } from 'src/app/task-status.service';
import { EunitSectionColor } from 'src/app/const/const';
import { IUnitInfo } from 'src/app/interfaces/unit-info.interface';
import { ShowTimeService } from 'src/app/show-time.service';


@Component({

  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  d = new Date();
  H = this.d.getHours() * 60;
  M = this.d.getMinutes();
  time = this.H + this.M;
  color: EunitSectionColor = EunitSectionColor.GRAY;
  width: number = 850 / 1440;
  length: number = 0;

  constructor(public taskStatus: TaskStatusService, public showTime: ShowTimeService) { }

  ngOnInit(): void {
  this.color=this.taskStatus.unitInfo.color;
    // console.log(this.taskStatus.sectionIndex , this.showTime.workTimes)
    // console.log(this.taskStatus.sectionIndex)
    // console.log(this.showTime.workTimes)
    // console.log(this.getTotal())
    // console.log(this.taskStatus.sectionIndex, this.showTime.green);
    

  }


}

import { Component, OnInit } from '@angular/core';
import { ShowTimeService } from 'src/app/show-time.service';
import { TaskStatusService } from 'src/app/task-status.service';
import { EunitSectionColor } from 'src/app/const/const';
import { IUnitInfo } from 'src/app/interfaces/unit-info.interface';
// import { DialogAskModeComponent } from '../dialog-ask-mode/dialog-ask-mode.component';

@Component({
  selector: 'app-dialog-ask-mode',
  templateUrl: './dialog-ask-mode.component.html',
  styleUrls: ['./dialog-ask-mode.component.css']
})
export class DialogAskModeComponent implements OnInit {

  constructor(public taskStatus:TaskStatusService , public showTime:ShowTimeService) { }

  description = "";
  ngOnInit(): void {

  }
  onStartWork(){
 this.taskStatus.disabledWork =true;
 this.taskStatus.disabledRest = false;
 // this.showTime.unitStatus!.push({start: 0 , end:1 , status:'hi'})

 this.showTime.workTimes.push(Math.floor(this.taskStatus.unitIndex / 60)+ ':' + this.taskStatus.unitIndex %60 +'-w')
 // this.showTime.workTimes.push(this.taskStatus.unitIndex +'-w')
 this.taskStatus.setSectionIndex();
 
 const unitInfo = {
   color: EunitSectionColor.GREEN
 } as IUnitInfo;
 this.taskStatus.unitInfo = unitInfo;

 document.getElementById('task1')?.click();
  }
}

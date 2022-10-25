import { Component, OnInit } from '@angular/core';
import { EunitSectionColor } from 'src/app/const/const';
import { IUnitInfo } from 'src/app/interfaces/unit-info.interface';
import { TaskStatusService } from 'src/app/task-status.service';

@Component({
  selector: 'app-dialog-leaving-work',
  templateUrl: './dialog-leaving-work.component.html',
  styleUrls: ['./dialog-leaving-work.component.css']
})
export class DialogLeavingWorkComponent implements OnInit {

 


  constructor(public taskStatus:TaskStatusService ) { }
  
  rating2:number=0 ;
 
  description = "";
  ngOnInit(): void {
  }
  
  onFinishWork(){
    this.taskStatus.disabledWork =false;
    this.taskStatus.disabledRest = false;

    this.taskStatus.setSectionIndex();
    
    const unitInfo = {
      color: EunitSectionColor.GRAY
    } as IUnitInfo;
    this.taskStatus.unitInfo = unitInfo;

    document.getElementById('task3')?.click();

  }

}

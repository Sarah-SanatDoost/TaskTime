import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TaskStatusService } from 'src/app/task-status.service';
import { EunitSectionColor } from 'src/app/const/const';
import { IUnitInfo } from 'src/app/interfaces/unit-info.interface';


@Component({

  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  color:EunitSectionColor=EunitSectionColor.GRAY;
  width: number = 850/1440;
  // unitIndex:TaskStatusService;
  // static color: EunitSectionColor = EunitSectionColor.GREEN;
  // static color: EunitSectionColor = EunitSectionColor.GREEN;



  constructor(public taskstatus : TaskStatusService) { }

  ngOnInit(): void {
    this.color=this.taskstatus.unitInfo.color;
    console.log(this.taskstatus.unitIndex)
  }

  // setTimeout(() => {
  //   //componentRef.instance.index= 20;
  //   componentRef.instance.color = this.color;
  // }, 100);

}

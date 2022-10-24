import { Injectable } from '@angular/core';
import { EunitSectionColor } from './const/const';
import { TaskStatusService } from './task-status.service';

@Injectable({
  providedIn: 'root'
})
export class ShowTimeService {

  constructor(public taskStatus: TaskStatusService) { }

  workTimes: any[] =[];

  total:any[] =[];
  green:any[] =[];
  red:any[] =[];
 
  // getTotal(){
  //   let i = this.taskStatus.sectionIndex;
  //   if (this.taskStatus.unitInfo.color === EunitSectionColor.GREEN){
  //     while (i === this.taskStatus.sectionIndex){
  //       this.green.push(this.taskStatus.unitIndex)
  //     }
  //   }
  // }


  // unitStatus?: [{ start: number ; end: number; status: string; } | undefined];
}

import { Injectable } from '@angular/core';
import { IUnitInfo } from './interfaces/unit-info.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskStatusService {
  constructor() { }

  // work:boolean = false;
  // rest:boolean = false;
  // outwork:boolean = true;
  unitInfo!: IUnitInfo;
  timer: any = 0;
  unitIndex: number = 0;
  sectionIndex: number = 0;

  setUnitIndex() {
    if (this.unitIndex <= 1440) {
      this.unitIndex++;
    }
  }

  setSectionIndex() {
    if (this.unitIndex <= 1440) {
      this.sectionIndex++;
    }

  }
}

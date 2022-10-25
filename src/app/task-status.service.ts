import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUnitInfo } from './interfaces/unit-info.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskStatusService {
  constructor() { }

  unitInfo!: IUnitInfo;
  timer: any = 0;
  unitIndex: number = 0;
  // sectionIndex: BehaviorSubject<number>  = new BehaviorSubject<number>(0);
 sectionIndex: number =0 ;
  disabledWork: boolean = false;
  disabledRest: boolean = false;

  setUnitIndex() {
    if (this.unitIndex <= 1440) {
      this.unitIndex++;
    }
  }

  setSectionIndex() {
    if (this.unitIndex <= 1440) {
      // this.sectionIndex.next(1);
      this.sectionIndex++;
    }

  }
}

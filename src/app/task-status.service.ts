import { Injectable } from '@angular/core';
import { IUnitInfo } from './interfaces/unit-info.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskStatusService {
  constructor() { }

  work:boolean = false;
  rest:boolean = false;
  outwork:boolean = true;
  unitInfo!:IUnitInfo;
}

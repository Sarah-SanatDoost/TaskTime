import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowTimeService {

  constructor() { }

  workTimes: any[] =[];
 
  // unitStatus?: [{ start: number ; end: number; status: string; } | undefined];
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskStatusService {
  constructor() { }

  work:boolean = false;
  rest:boolean = false;
  outwork:boolean = true;
}

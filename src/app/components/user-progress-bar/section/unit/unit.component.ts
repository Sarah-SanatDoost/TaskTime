import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TaskStatusService } from 'src/app/task-status.service';
import { EunitSectionColor } from 'src/app/const/const';


@Component({
  // imports: [CommonModule],
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  // color:string = 'red';
  color:EunitSectionColor= EunitSectionColor.GRAY
  width: number = 850/1440
  static unitInfo: any;

  constructor(public taskstatus : TaskStatusService) { }

  ngOnInit(): void {
  }
  // setTimeout(() => {
  //   //componentRef.instance.index= 20;
  //   componentRef.instance.color = this.color;
  // }, 100);

}

import { ChangeDetectorRef, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ShowTimeService } from 'src/app/show-time.service';
import { TaskStatusService } from 'src/app/task-status.service';
import { EunitSectionColor } from 'src/app/const/const';
import { IUnitInfo } from 'src/app/interfaces/unit-info.interface';
import { UnitComponent } from '../user-progress-bar/section/unit/unit.component';
// import { DialogAskModeComponent } from '../dialog-ask-mode/dialog-ask-mode.component';

@Component({
  selector: 'app-dialog-ask-mode',
  templateUrl: './dialog-ask-mode.component.html',
  styleUrls: ['./dialog-ask-mode.component.css']
})


export class DialogAskModeComponent implements OnInit {
  d = new Date();
  H = this.d.getHours() * 60;
  M = this.d.getMinutes();
  time = this.H + this.M;
  constructor(private cdRef: ChangeDetectorRef, private resolver: ComponentFactoryResolver, private taskStatus: TaskStatusService,
    public showTime: ShowTimeService) { }




  @ViewChild("unitsection", { read: ViewContainerRef })
  unitsectioncontainer!: ViewContainerRef;
  description = "";
  ngOnInit(): void {
   
  }

  ngAfterViewInit(): void {

    // if (this.taskStatus.sectionIndex == 1) {

    //   let stop = this.time;
    //   for (let i = 0; i <= stop; i++) {
    //     this.createComponent();
    //     this.taskStatus.setUnitIndex();
    //   }

    // }

    // this.onStartWork()
    
 

  }

  onStartWork(){

    this.taskStatus.disabledWork = true;
    this.taskStatus.disabledRest = false;
    this.taskStatus.setSectionIndex();

  }

}



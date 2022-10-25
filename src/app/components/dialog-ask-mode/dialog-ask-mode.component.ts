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

    this.onStartWork()
    
 

  }

  onStartWork(){

    this.taskStatus.disabledWork = true;
    this.taskStatus.disabledRest = false;

    //  this.showTime.workTimes.push(Math.floor(this.taskStatus.unitIndex / 60)+ ':' + this.taskStatus.unitIndex %60 +'-w')
    // this.showTime.workTimes.push(this.taskStatus.unitIndex +'-w')
    //this.taskStatus.setSectionIndex();

    const unitInfo = {
      color: EunitSectionColor.GREEN
    } as IUnitInfo;
    this.taskStatus.unitInfo = unitInfo;

    document.getElementById('task1')?.click();
  }

  // createComponent() {

  //   const factory = this.resolver.resolveComponentFactory(UnitComponent);
  //   const componentRef = this.unitsectioncontainer.createComponent(factory);


  //   setTimeout(() => {
  //     //componentRef.instance.index= 20;
  //     // componentRef.instance.color = 'EunitSectionColor.RED';
  //   }, 100);

  // }
}



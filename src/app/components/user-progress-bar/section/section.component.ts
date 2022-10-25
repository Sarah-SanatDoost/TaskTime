import { AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, Directive, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { interval } from 'rxjs';
import { EunitSectionColor } from 'src/app/const/const';
import { IUnitInfo } from 'src/app/interfaces/unit-info.interface';
import { ShowTimeService } from 'src/app/show-time.service';
import { TaskStatusService } from 'src/app/task-status.service';
import { UnitComponent } from './unit/unit.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: '[app-section]',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],

})
export class SectionComponent implements OnInit, AfterViewInit {

  // index!: IUnitInfo;
  // color!: string;
  // dateTime!: Date;
  unitInfo!: IUnitInfo; 
  d = new Date();
  H = this.d.getHours() * 60;
  M = this.d.getMinutes();
  time = this.H + this.M;

  min = this.taskStatus.unitIndex;
  h = this.min / 60;
  m = this.min % 60;
  constructor(private cdRef: ChangeDetectorRef, private resolver: ComponentFactoryResolver, private taskStatus: TaskStatusService,
    public showTime: ShowTimeService) { }

  @ViewChild("unitsection", { read: ViewContainerRef })
  unitsectioncontainer!: ViewContainerRef;

  get localStorage() {
    return localStorage;
  }


  ngOnInit(): void {

  }
  ngAfterViewInit(): void {

    if (this.taskStatus.sectionIndex == 1) {

      let stop = this.time;
      for (let i = 0; i <= stop; i++) {
        this.createUnitComponent();
        // if(i == this.time){
        //   setTimeout(() => {
            
        //     this.clearTimer();
        //     this.createPer1Second();
        //   }, 500);
         
    
        // }
      }


      
     
    }      
    
  }

  createPer1Second(){
    this.taskStatus.timer = setInterval(() => {

      this.createUnitComponent();
      // this.getTotalWork();
      // this.getTotalRest();
      //localStorage.setItem('localkey', 'localkeyvalue');

      if (this.taskStatus.unitIndex >= 1440) {
        clearInterval(this.taskStatus.timer);
      }
    }, 1000);



    this.cdRef.detectChanges();
  }

  createUnitComponent() {

    const factory = this.resolver.resolveComponentFactory(UnitComponent);
    const componentRef = this.unitsectioncontainer.createComponent(factory);

  }

  clearTimer(){
    clearInterval(this.taskStatus.timer);
  }

  getTotalWork() {
    let u = this.taskStatus.unitIndex

    if (this.taskStatus.disabledWork === true) {
      this.showTime.green.push(u)
    }
  }
  getTotalRest() {
    let u = this.taskStatus.unitIndex;

    if (this.taskStatus.disabledRest === true) {
      this.showTime.red.push(u)
    }
  }

  // for (u; s <= 0; u++) {
  //   this.showTime.green.push(u)
  // }

  // while (i === this.taskStatus.sectionIndex){
  //   this.showTime.green.push(this.taskStatus.unitIndex)
  // }



}



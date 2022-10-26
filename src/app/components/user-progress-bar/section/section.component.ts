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
  changeDetection: ChangeDetectionStrategy.Default

})
export class SectionComponent implements OnInit, AfterViewInit, AfterViewChecked, AfterContentInit {

  // index!: IUnitInfo;
  // color!: string;
  // dateTime!: Date;
  unitInfo!: IUnitInfo;
  interval: any
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

  promise = new Promise<void>((resolve, reject) => {
    setTimeout(() => {

      if (this.taskStatus.sectionIndex == 0) {
        let stop = this.time;
        for (let i = 0; i <= stop; i++) {
          this.createComponent();
          this.taskStatus.setUnitIndex();
        }

      }
      resolve();
      this.cdRef.detectChanges();
    }, 2000);
  })

  get localStorage() {
    return localStorage;
  }


  ngOnInit(): void {

  }
  ngAfterViewInit(): void {

    clearInterval(this.taskStatus.timer);
    this.taskStatus.timer = this.promise.then(() => {
      if (this.taskStatus.sectionIndex == 0) {
        this.taskStatus.setSectionIndex;
        this.taskStatus.disabledRest = false;
        this.taskStatus.disabledWork = true;
        const unitInfo = {
          color: EunitSectionColor.GREEN
        } as IUnitInfo;
        this.taskStatus.unitInfo = unitInfo;
        this.cdRef.detectChanges();
      }

      setTimeout(() => {

        clearInterval(this.taskStatus.timer);
        this.taskStatus.timer = setInterval(() => {

          this.createComponent();
          this.taskStatus.setUnitIndex();
          // this.getTotalWork();
          // this.getTotalRest();
          localStorage.setItem('localkey', 'localkeyvalue');

          if (this.taskStatus.unitIndex >= 1440) {
            clearInterval(this.taskStatus.timer);
          }
        }, 1000);

      }, 500);

    });







  }
  ngAfterViewChecked(): void {

  }
  ngAfterContentInit(): void {

  }

  createComponent() {

    const factory = this.resolver.resolveComponentFactory(UnitComponent);
    const componentRef = this.unitsectioncontainer.createComponent(factory);


    setTimeout(() => {
      //componentRef.instance.index= 20;
      // componentRef.instance.color = 'EunitSectionColor.RED';
    }, 100);

  }

  // clearTimer(){
  //   clearInterval(this.taskStatus.timer);
  // }

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


}



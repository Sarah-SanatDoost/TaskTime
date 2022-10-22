import { AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, Directive, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { interval } from 'rxjs';
import { EunitSectionColor } from 'src/app/const/const';
import { IUnitInfo } from 'src/app/interfaces/unit-info.interface';
import { ShowTimeService } from 'src/app/show-time.service';
import { TaskStatusService } from 'src/app/task-status.service';
import { UnitComponent } from './unit/unit.component';




@Component({
  selector: '[app-section]',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
// @Directive({
//   selector: '[app-section]',
// })

export class SectionComponent implements OnInit, AfterViewInit, AfterViewChecked, AfterContentInit {

  index!: IUnitInfo;
  color!: string;
  dateTime!: Date;
  unitInfo!: IUnitInfo;
interval:any 

min =this.taskStatus.unitIndex ;
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
    this.dateTime = new Date();
    // console.log(this.showTime.unitStatus)
  }
  ngAfterViewInit(): void {

  }
  ngAfterViewChecked(): void {

  }
  ngAfterContentInit(): void {

    clearInterval(this.taskStatus.timer);
    this.taskStatus.timer =setInterval(() => {

      this.createComponent();
      this.taskStatus.setUnitIndex();
      // this.showTime.workTimes.push(this.h + ':' + this.m +'-w')
      // this.showTime.unitStatus.push(this.taskStatus.unitIndex)
      // this.showTime.workTimes.push(this.taskStatus.unitIndex)

      localStorage.setItem('localkey', 'localkeyvalue');

      if (this.taskStatus.unitIndex === 1440) {
        clearInterval(this.interval);
      }
    }, 1000);


    this.cdRef.detectChanges();
  }

  createComponent() {

    const factory = this.resolver.resolveComponentFactory(UnitComponent);
    const componentRef = this.unitsectioncontainer.createComponent(factory);


    setTimeout(() => {
      //componentRef.instance.index= 20;
      // componentRef.instance.color = 'EunitSectionColor.RED';
    }, 100);

  }
  // stop(this.taskStatus.unitIndex){
  //   if taskStatus.unitIndex
  //   }

}



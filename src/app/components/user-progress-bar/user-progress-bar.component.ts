import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactory, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IUnitInfo } from 'src/app/interfaces/unit-info.interface';
import { ShowTimeService } from 'src/app/show-time.service';
import { TaskStatusService } from 'src/app/task-status.service';
import { SectionComponent } from './section/section.component';
import { UnitComponent } from './section/unit/unit.component';

@Component({
  selector: 'app-user-progress-bar',
  templateUrl: './user-progress-bar.component.html',
  styleUrls: ['./user-progress-bar.component.css']
})
export class UserProgressBarComponent implements OnInit, AfterViewInit {

  @ViewChild("section", { read: ViewContainerRef })
  sectioncontainer!: ViewContainerRef;
  unitInfo!: IUnitInfo;

  constructor(private cdRef: ChangeDetectorRef, private resolver: ComponentFactoryResolver, private taskStatus: TaskStatusService,
    public showTime: ShowTimeService) { }


  ngOnInit(): void {

  }

  ngAfterViewInit(): void {


  }
  ngAfterContentInit(): void {
    
    setTimeout(() => {
      this.createSectionComponent();
     
      // this.showTime.workTimes.push(this.taskStatus.unitIndex)
      // this.showTime.workTimes.push(this.taskStatus.h + ':' + this.taskStatus.m +'-w')
    }, 500);
    this.cdRef.detectChanges();
  }

  createSectionComponent() {
    const factory = this.resolver.resolveComponentFactory(UnitComponent);
    const componentRef = this.sectioncontainer.createComponent(factory);
    


    // componentRef.instance.index= 20;
    // componentRef.instance.color= 'red';

  }
}

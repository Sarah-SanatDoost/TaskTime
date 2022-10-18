import { AfterViewInit, Component, ComponentFactory, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IUnitInfo } from 'src/app/interfaces/unit-info.interface';
import { SectionComponent } from './section/section.component';

@Component({
  selector: 'app-user-progress-bar',
  templateUrl: './user-progress-bar.component.html',
  styleUrls: ['./user-progress-bar.component.css']
})
export class UserProgressBarComponent implements OnInit, AfterViewInit {

  @ViewChild("section", { read: ViewContainerRef })
  sectioncontainer!: ViewContainerRef;
  unitInfo!:IUnitInfo;
  constructor(private resolver: ComponentFactoryResolver) {}
 

  ngOnInit(): void {
  
    
  }

ngAfterViewInit(): void {
  this.createComponent(this.unitInfo);
}

  createComponent(unitInfo:IUnitInfo) {
    this.unitInfo=unitInfo;
    this.sectioncontainer.clear(); 
    const factory = this.resolver.resolveComponentFactory(SectionComponent);
    const componentRef = this.sectioncontainer.createComponent(factory);
    setTimeout(() => {
      // componentRef.instance.index= 20;
      // componentRef.instance.color= 'red';
    }, 100);
    
  }
}

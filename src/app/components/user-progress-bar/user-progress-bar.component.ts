import { AfterViewInit, Component, ComponentFactory, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { SectionComponent } from './section/section.component';

@Component({
  selector: 'app-user-progress-bar',
  templateUrl: './user-progress-bar.component.html',
  styleUrls: ['./user-progress-bar.component.css']
})
export class UserProgressBarComponent implements OnInit, AfterViewInit {

  @ViewChild("section", { read: ViewContainerRef })
  sectioncontainer!: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}
 

  ngOnInit(): void {
    

  }

ngAfterViewInit(): void {
  this.createComponent();
  this.createComponent();
}

  createComponent() {
    this.sectioncontainer.clear(); 
    const factory = this.resolver.resolveComponentFactory(SectionComponent);
    const componentRef = this.sectioncontainer.createComponent(factory);
    setTimeout(() => {
      componentRef.instance.index= 20;
      componentRef.instance.color= 'red';
    }, 100);
    
  }
}

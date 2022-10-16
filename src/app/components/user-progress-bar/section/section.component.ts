import { AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, Directive, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
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

export class SectionComponent implements OnInit,AfterViewInit,AfterViewChecked,AfterContentInit {

  index!:number;
  color!:string;
  dateTime!: Date;

  constructor(private cdRef : ChangeDetectorRef,private resolver: ComponentFactoryResolver) {}

  @ViewChild("unitsection", { read: ViewContainerRef })
  unitsectioncontainer!: ViewContainerRef;

  get localStorage(){
    return localStorage;
  }

  ngOnInit(): void {
   this.dateTime= new Date();
  }
  ngAfterViewInit(): void {
    
  }
  ngAfterViewChecked():void{
    
  }
  ngAfterContentInit(): void{
    // console.log(this.index);
    setInterval(() => {
      this.createComponent();
      localStorage.setItem('localkey', 'localkeyvalue');
    }, 1000);
    this.cdRef.detectChanges();
  }

  createComponent() {
    //this.unitsectioncontainer.clear(); 
    const factory = this.resolver.resolveComponentFactory(UnitComponent);
    const componentRef = this.unitsectioncontainer.createComponent(factory);


    setTimeout(() => {
      //componentRef.instance.index= 20;
      //componentRef.instance.color= 'red';
    }, 100);
    
  }

}

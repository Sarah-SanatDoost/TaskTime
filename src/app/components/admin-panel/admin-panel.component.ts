import { Component, OnInit } from '@angular/core';
import { Elements } from 'src/app/interfaces/elements';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor() { }
  employees : Elements[]=[
    {firstName:'سارا' , lastName: 'صنعت دوست' , arriveTime: '9:10'},
    {firstName:'مهسا' , lastName: 'خاتمی' , arriveTime: '9:00'},
    {firstName:'زهرا' , lastName: 'عیدی' ,arriveTime: '9:50'},
    {firstName:'سارا' , lastName: 'صنعت دوست' , arriveTime: '9:10'},
    {firstName:'سارا' , lastName: 'صنعت دوست' , arriveTime: '9:10'},
  ]
  ngOnInit(): void {
  }

}
